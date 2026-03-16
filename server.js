const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Path to the messages JSON file
const messagesFilePath = path.join(__dirname, 'messages.json');

// Ensure the messages file exists
if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, JSON.stringify([]));
}

// API Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    phone,
    timestamp: new Date().toISOString()
  };

  // Read existing messages
  fs.readFile(messagesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    const messages = JSON.parse(data);
    messages.push(newMessage);

    // Write back to file
    fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      res.status(201).json({ success: true, message: 'Message correctly saved!' });
    });
  });
});

// API Endpoint to get all messages
app.get('/api/messages', (req, res) => {
  fs.readFile(messagesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    res.json(JSON.parse(data));
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
