const User = require("../models/Users");
const bcrypt = require("bcryptjs");

exports.index = (req, res) => {
    res.render("index");
}

exports.login = (req, res) => {
    res.render("auth/login");
}

exports.register = (req, res) => {
    res.render("auth/register");
}

exports.createUser = async (req, res) => {
    let { full_name, email, password, confirm_password } = req.body;
    let checkUser = await User.findOne({ email });
    
    if(!full_name || !email || !password){
        req.flash("error", "All fields are required");
        res.redirect("/register");
    }

    if(password !== confirm_password){
        req.flash("error", "Password & Confirm Password must be same.");
        res.redirect("/register");
    }

    if(checkUser){
        req.flash("error", "Email already exists. Please login.");
        res.redirect("/login");
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        full_name,
        email,
        password: passwordHash
    });

    const savedUser = await user.save();
    req.flash("success", "User created successfully. Please login.");
    res.redirect("/login");
}