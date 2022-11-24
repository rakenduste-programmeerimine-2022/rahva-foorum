const User = require('../models/user.model')
const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
  }
  User.signup(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.send(err))
}

exports.login = async (req, res) => {
 

  const userExist = await User.findOne({ name: req.body.name,email: req.body.email });


  if (!userExist) return res.status(400).json({
      message: 'Nimi või email on vale!!'
  })


  const matchPassword = await User.comparePassword(req.body.password, userExist.password)


  if (!matchPassword) return res.status(401).json({
      token: null,
      message: 'Pass on vale!'
  })
  console.log(userExist)


  const token = jwt.sign({ id: userExist._id }, 'secretKey', {
      expiresIn: 86400
  })


  return res.json({
      _id: userExist._id,
      name: userExist._id,
      message: 'Auth Succesful',
      token: token
  })

}


exports.protected = async (req, res) => {}