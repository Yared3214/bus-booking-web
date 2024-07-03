const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { User } = require('./models/user.model')
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://yaredman0099:yarednewdatabasepass3214@cluster0.tfcoscf.mongodb.net/bus-booking-web?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.send('API is running...');
  });

  app.use('/register', registerRoute);
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));