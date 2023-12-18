const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid'); 
const userModel = require('../models/userModel');

exports.signup = async (req, res) => {
  const {email, password} = req.body; 
  const userUuid = uuidv4()
  const hashedPassword = await bcrypt.hash(password, 10); 

  try {
    const existingUser = await userModel.findOne(email); 
    if(existingUser){
      return res.status(409).send('User already exists. Please login'); 
    } 

    const sanitizedEmail = email.toLowerCase()
    const data = {
        user_id: userUuid,
        email: sanitizedEmail,
        hashed_password:hashedPassword
    }

    const insertedUser = await userModel.insertOne(data)

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    }); 

    res.status(200).json({token, user_id: userUuid})

  } catch (error) {
    console.log(error); 
  }
};

exports.login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await userModel.findOne(email);
    if(user && await bcrypt.compare(password, user.hashed_password)){
      const token = jwt.sign(user, email, {
        expiresIn: 60 * 24,
      }); 
      return res.status(200).json({token, user_id: user.user_id})
    }
     res.status(400).send('Invalid credentials');

  } catch (error) {
    console.error(error);
  }
}; 

exports.user = async (req, res) => {
  const formData = req.body.formData; 
  try {
    const user = await userModel.updateOne(formData.user_id, formData);
    if(user){
      return res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send('Error updating user');
  }
}