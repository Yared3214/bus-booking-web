const express = require('express');
const { User } = require('../models/user.model');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put('/:id', async (req, res) => {
    // try {
    //   console.log('updating user info with params: ', req.body);
    //   const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //   res.status(200).json(updatedUser);
    // } catch (error) {
    //   res.status(500).json({ message: error.message });
    // }

    try {
      const { currentPassword, newPassword, confirmPassword, ...rest } = req.body;
  
      // Find user
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Verify current password
      if (currentPassword && !(await user.comparePassword(currentPassword))) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
  
      // Validate new password and confirmation match
      if (newPassword && newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'New passwords do not match' });
      }
  
      // Update fields
      Object.assign(user, rest);
  
      // Update password if provided
      if (newPassword) {
        user.password = newPassword;
      }
  
      await user.save();
      res.status(200).json({message: 'profile updated successfully'});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
