const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'data.json');


app.use(cors());
app.use(express.json());


const defaultData = {
  companyName: "Business Name",
  aboutCompany: "Lorem ipsum dolor sit amet consectetur. Viverra leo scelerisque dui mollis integer. Quisque enim sit porttitor quam amet eros. Sed sit in at odio malesuada semper. Nec vulputate ut a velit pellentesque platea purus etiam nunc. Massa at arcu lectus in.",
  whyChooseUs: "We provide the best quality products with exceptional customer service. Our team is dedicated to bringing you innovative solutions that make a difference."
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
}


app.get('/api/content', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});


app.put('/api/content', (req, res) => {
  try {
    const currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const updatedData = { ...currentData, ...req.body };
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2));
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
