const withAuth = (req, res, next) => {
    if(!req.session.user_idd){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;