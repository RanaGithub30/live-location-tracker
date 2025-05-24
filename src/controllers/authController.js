exports.index = (req, res) => {
    res.render("index");
}

exports.login = (req, res) => {
    res.render("auth/login");
}

exports.register = (req, res) => {
    res.render("auth/register");
}