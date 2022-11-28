const User = require('../models/user.model')
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { body } = require("express-validator")
const bcrypt = require('bcrypt')
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post(
  "/signup",
  body("name").not().isEmpty().trim().escape(),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 5 }).withMessage("Minimum length 5"),
  userController.signup
)

router.get(
  "/signup",
userController.signup
)

router.post('/login', userController.login);
//router.post('/login', userController.login)

module.exports = router