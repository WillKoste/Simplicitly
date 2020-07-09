const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const nodemailer = require('nodemailer');

const Customer = require('../models/Customer');

// @Route   POST /api/customers
// @Desc    Create customer
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Valid email address is required').isEmail()
], async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  const {name, email, phone, message, currentTech, goal} = req.body;

  const customerFields = {};
  if(name) customerFields.name = name;
  if(email) customerFields.email = email;
  if(phone) customerFields.phone = phone;
  if(message) customerFields.message = message;
  if(currentTech) customerFields.currentTech = currentTech;
  if(goal) customerFields.goal = goal;
  
  try {
    let customer = new Customer(customerFields);
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.send(500).json({success: false, msg: 'Server Error'});
  }

  // const {name, email, phone, message, currentTech, goal} = req.body;

  
  try {
    const output = `
      <p>You have a new contact request!</p>
      <h1>Contact Details</h1>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone ? phone : 'N/A'}</li>
        <li>Current Tech: ${currentTech ? currentTech : 'N/A'}</li>
        <li>Goal: ${goal ? goal : 'N/A'} </li>
      </ul>
      <h2>Message</h2>
      <p>${message ? message : 'N/A'}</p>
    `;
    
    let transporter = nodemailer.createTransport({
      host: "mail.doobiedalmatian.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'test@doobiedalmatian.com', 
        pass: 'My2dogs95', 
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Node Mailer " <test@doobiedalmatian.com>', // sender address
      to: `Simplicitly, simplicitly.dev@gmail.com`, // list of receivers
      subject: "New Customer Available - " + name, // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
    console.log(info)
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

});

module.exports = router;