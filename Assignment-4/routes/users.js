const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

users = [];

// / => GET
router.get('/', (req, res, next) => {
    res.render('home', {
      pageTitle: 'Home Page',
      path: '/',
    });
});

// /users -> GET
router.get('/users', (req, res, next) => {
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/users',
  });
});

// /users/add-name => POST
router.post('/users/add-name', (req, res, next) => {
    users.push(req.body.name);
    console.log(users);
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/users',
    })
});

module.exports = router;