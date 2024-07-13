const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const { User } = require('./models/user.model')
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const seatsRouter = require('./routes/seats');
const routesRouter = require('./routes/routes');
const busRouter = require('./routes/bus');
const bookingRoute = require('./routes/booking');
const depositRoute = require('./routes/deposit');
const userRoute = require('./routes/changeProfile');
const adminRoute = require('./routes/adminDashboard');
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
  app.use('/seats', seatsRouter);
  app.use('/routes', routesRouter);
  app.use('/bus', busRouter);
  app.use('/book', bookingRoute);
  app.use('/deposit', depositRoute);
  app.use('/change', userRoute);
  app.use('/admin', adminRoute);

  
  app.post('/login', async (req, res) => {
    let jwtSecretKey = "583f7933b6da53a77a5e37a092b50372513b52ff1c0ac14e2ca0f5a02fabf5b3ac1bfbefc1d5456d653b98fdc256e4d1a0535e518922189a72e2f28a7b60b56e";
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '1h' });
      res.status(200).json({ token });
      // res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

app.get('/user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    let jwtSecretKey = "583f7933b6da53a77a5e37a092b50372513b52ff1c0ac14e2ca0f5a02fabf5b3ac1bfbefc1d5456d653b98fdc256e4d1a0535e518922189a72e2f28a7b60b56e";
    const decoded = jwt.verify(token, jwtSecretKey);
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
})


  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));