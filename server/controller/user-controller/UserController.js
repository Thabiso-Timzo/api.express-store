const User = require('../../models/user-schema/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    jwt_secret
} = require('../../config/index');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({msg: 'User not found. Please register.'});
        }

        if (!validateEmail(email)) {
            return res.status(400).json({msg: 'Please enter a valid email address.'});
        }

        const isPassword = bcrypt.compareSync(password, existingUser.password);
        if (!isPassword) {
            return res.status(400).json({msg: 'Invalid password or email.'});
        }

        const token = jwt.sign({id: existingUser._id}, jwt_secret, {
            expiresIn: '35s'
        });

        res.cookie(String(existingUser._id), token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: 'lax'
        });

        return res.status(200).json({
            msg: 'Logged in successfully.',
            user: existingUser,
            token
        });
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.register = async (req, res ) => {
    const { name, email, password } = req.body;
    let existingUser;
     
    try {
        existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({msg: 'User already exists! Please login.'});
        }

        if (!validateEmail(email)) {
            return res.status(400).json({msg: 'Please enter a valid email address.'});
        }

        const hashedPassword = bcrypt.hashSync(password); 

        const user = new User({
            name,
            email,
            password: hashedPassword,
        })

        await user.save();

        return res.status(201).json({msg: 'Registered successfully.'})
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.logout = (req, res) => {
    const cookies = req.headers.cookies;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
      return res.status(400).json({msg: "Couldn't find token."});
  }
  jwt.verify(String(prevToken), jwt_secret, (err, user) => {
      if (err) {
          console.log(err);
          return res.status(403).json({msg: 'Authentication failed'})
      }
      res.clearCookie(`${user.id}`);
      req.cookies[`${user.id}`] = "";
      return res.status(200).json({msg: 'Successfully logged out.'});
  }) 
}


exports.getUserInfor = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')

        res.json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.getUsersAllInfor = async (req, res) => {
    try {
        const users = await Users.find().select('-password')

        res.json(users)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

exports.updateUser = async (req, res) => {
    try {
        const {name, avatar} = req.body
        await Users.findOneAndUpdate({_id: req.user.id}, {
            name, avatar
        })

        res.json({msg: 'Update Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.updateUsersRole = async (req, res) => {
    try {
        const {role} = req.body

        await Users.findOneAndUpdate({_id: req.params.id}, {
            role
        })

        res.json({msg: 'Update Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id)

        res.json({msg: 'Deleted Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}