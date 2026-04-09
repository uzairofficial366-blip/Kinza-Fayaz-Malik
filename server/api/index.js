const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');
const Contact = require('../models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI not provided. Running in degrade mode.");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// --- Routes ---

app.get('/api/projects', async (req, res) => {
  try {
    await connectDB();
    if (!isConnected) {
      // Return mock data if no DB
      return res.json([
        { _id: '1', title: 'TED Talk Poster', description: 'Promotional poster design for TEDx event.', image: 'project1.png', category: 'Event Poster' },
        { _id: '2', title: 'Sports Gala Invitation', description: 'Invitation card for the annual university sports gala.', image: 'project2.png', category: 'Invitation' },
        { _id: '3', title: "IR Reader's Club", description: 'Inauguration session visual identity.', image: 'project3.png', category: 'Branding' },
      ]);
    }
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching projects' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    await connectDB();
    if (!isConnected) return res.status(503).json({ error: 'Database unavailable' });
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' });
  }
});

app.get('/api/testimonials', async (req, res) => {
  try {
    await connectDB();
    if (!isConnected) {
      return res.json([
        { _id: '1', name: 'John Doe', feedback: 'Kanza is an incredibly talented designer. She brought our vision to life perfectly.' },
        { _id: '2', name: 'Sarah Smith', feedback: 'The event posters she designed resulted in record attendance. Highly recommended!' },
      ]);
    }
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching testimonials' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    await connectDB();
    if (!isConnected) {
      console.log('Mock Contact Submission:', req.body);
      return res.status(201).json({ message: 'Message received (mock)' });
    }
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message successfully sent!' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit contact form' });
  }
});

// Root Route
app.get('/', (req, res) => res.send('API is running...'));

// Export exactly app for Vercel Serverless
module.exports = app;

// Listen only if not running on Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  });
}
