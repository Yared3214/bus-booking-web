const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const Deposit = require('../models/deposit.model');

const router = express.Router();

router.post('/', (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './uploads'; // Ensure this directory exists
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ message: 'Error parsing the files.', error: err });
    }

    const { amount } = fields;
    const receiptFile = files.receipt && files.receipt[0]; // Access the first element of the receipt array
    const receipt = receiptFile ? fs.readFileSync(receiptFile.filepath) : null;
 
    if (!amount || !receipt) {
      return res.status(400).json({ message: 'Amount and receipt are required.' });
    }

    try {
      const deposit = new Deposit({ amount: amount[0], receipt, isVerified: false });
      await deposit.save();
      res.status(201).json({ message: 'Deposit submitted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.', error });
    }
  });
});

module.exports = router;
