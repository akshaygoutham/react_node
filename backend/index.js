const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

// Add this route to handle requests to "/"
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
