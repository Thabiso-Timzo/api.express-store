const User = require('../../models/user-schema/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../utils/sendMail');

const { 
    activation_secret, 
    access_secret,
    refresh_secret,
    client_url,
    jwt_secret
} = require('../../config/index');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, activation_secret, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, access_secret, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, refresh_secret, {expiresIn: '7d'})
}

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) 
            return res.status(400).json({msg: "Please fill in all fields."});

        if (!validateEmail(email)) 
            return res.status(400).json({msg: "Invalid email address."});

        const user = await User.findOne({email})
        if (user) return res.status(400).json({ msg: "This email already exists." });

        if (password.length < 8) 
            return res.status(400).json({ msg: "Password should be at least 8 characters." });

        const passwordHash = await bcrypt.hash(password, 12);
        
        const newUser = {
            name,
            email,
            password: passwordHash
        }

        const activation_token = createActivationToken(newUser);

        const url = `${client_url}/user/activate/${activation_token}`;
        sendEmail(email, url, "Verify your email address");

        res.json({
            msg: "You have registered! Please activate your email to start."
        });
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.activateEmail = async (req, res) => {
    try {
        const {activation_token} = req.body;
        const user = jwt.verify(activation_token, activation_secret);

        const  { name, email, password } = user;

        const check = await User.findOne({email});
        if (check) return res.status(400).json({msg: "This email already exists."});

        const newUser = new User({
            name, email, password
        });

        await newUser.save();

        res.json({msg: "Account has been activated!"})

    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: "This email does not exist."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Password is incorrect."});

        const refresh_token = createRefreshToken({id: user._id});
        res.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: '/user/refresh_token',
            maxAge: 7*24*60*60*1000
        });

        res.json({msg: "Login success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.getAccessToken = (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken
        if(!rf_token) return res.status(400).json({msg: "Please login now!"})

        jwt.verify(rf_token, refresh_secret, (err, user) => {
            if(err) return res.status(400).json({msg: "Please login now!"})

            const access_token = createAccessToken({id: user.id})
            res.json({access_token})
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: "This email address does not exist."});

        const access_token = createAccessToken({id: user._id});
        const url = `${client_url}/users/reset/${access_token}`;

        sendEmail(email, url, "Reset your password");
        res.json({msg: "Re-send the password, please check your email."})
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const {password} = req.body;
        //console.log(password)
        const passwordHash = await bcrypt.hash(password, 12);

        await User.findOneAndUpdate({id: req.user.id}, {
            password: passwordHash
        });

        res.json({msg: "Password successfully changed."});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.getUsersAllInfo = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie('refreshtoken', {path: '/user/refresh_token'});
        return res.json({msg: "Logged out successfully."});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { name, avatar } = req.body;
        await User.findOneAndUpdate({_id: req.params.id}, {
            name, avatar
        });

        res.json({msg: "Update success!"});
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.updateUsersRole = async (req, res) => {
    try {
        const {role} = req.body;
        await User.findOneAndUpdate({_id: req.params.id}, {
            role
        });

        res.json({msg: "Update success!"});
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.deleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.json({msg: "Deleted successfully!"});
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}