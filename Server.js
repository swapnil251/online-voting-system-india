const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Send OTP route
app.post('/send-otp', (req, res) => {
  const { voterId, mobile } = req.body;
  // OTP generation logic yaha implement karo
  const otp = Math.floor(1000 + Math.random() * 9000); // Random OTP
  console.log(`OTP for ${mobile} is: ${otp}`);
  // Yaha tum OTP ko mobile pe bhejne ka logic bhi daal sakte ho
  res.json({ message: `OTP sent to ${mobile}`, otp }); // Dummy response
});

// Verify OTP route
app.post('/verify-otp', (req, res) => {
  const { voterId, mobile, otp } = req.body;
  // OTP verification logic yaha implement karo
  if (otp === '1234') { // Dummy OTP for example
    res.json({ message: 'OTP Verified Successfully!' });
  } else {
    res.json({ message: 'Invalid OTP!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
