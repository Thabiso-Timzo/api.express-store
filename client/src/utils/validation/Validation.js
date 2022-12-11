export const isEmpty = (value) => {
    if (!value) return true
    return false
}

export const isEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isLength = (password) => {
    if (password.length < 8) return true
    return false
}

export const isMatch = (password, password2) => {
    if (password === password2) return true
    return false
}