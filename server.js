require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const memberRoutes = require('./routes/members');
const paymentRoutes = require('./routes/payments');
const expenseRoutes = require('./routes/expenses');
const donationRoutes = require('./routes/donations');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://ledosportsacademy:KYbsTxWjVBvPnREP@ledosportsacademy.ejcd06z.mongodb.net/?retryWrites=true&w=majority&appName=ledosportsacademy';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/donations', donationRoutes);

// Serve static files
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 