const express = require('express');
const cors = require("cors");
const fs = require('fs');

const app = express();
app.use(cors({
  origin: [
    'http://main.calebzaleski.com',
    'https://main.calebzaleski.com',
    'http://calebs-MacBook-Air.local:3000',
    'http://calebs-MacBook-Air.local:3001',
    'http://calebs-MacBook-Air.local:5173'
  ]
}));

app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
