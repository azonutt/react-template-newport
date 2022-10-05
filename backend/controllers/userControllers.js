import React from 'react'
import UserModel from '../models/userModel'

// app.post('/register',
 const Register = (req, res, next) => {
    // if (req.body.password !== req.body.confirmPassword) {
    //   res.redirect('/')
    // } else {
    //   console.log("req", req.body)
  
      UserModel.findOne({ username: req.body.username }, (err, data) => {
  
        var hash = bcrypt.hashSync(req.body.password, 12)
        if (err) {
          console.log(err)
        }
        else if (data) {
          res.json('Username already exists');
        }
        else {
  
          let userToSave = new UserModel({
            username: req.body.username,
            password: hash
          })
          userToSave.save((err, userData) => {
            if (err) {
              console.log(err);
            } else {
  
              res.json(data);
            }
          }
          )
        }
      })
    }
//   }
  module.exports = {Register}