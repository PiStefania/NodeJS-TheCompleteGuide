const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5f4cdf986d21233fe89059d2')
    .then(user => {
      req.session.user = user;
      res.redirect('/');
      //console.log(req.session);
    })
    .catch(err => console.log(err));
};
