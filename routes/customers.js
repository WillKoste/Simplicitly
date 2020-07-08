const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

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
});

module.exports = router;