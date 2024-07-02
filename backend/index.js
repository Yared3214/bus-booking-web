const express = require('express');
const mongoose = require('mongoose');
const { User } = require("./models/user.model");
const cors = require('cors');
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

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));