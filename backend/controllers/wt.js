// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5001;

// Middleware to parse JSON
app.use(express.json());
// app.use('/api/activities')
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wtLab', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection failed:', err));

// Define a Schema and Model
const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
);

const Book = mongoose.model('Book', bookSchema);

// Create (POST)
app.post('/api/activities', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read (GET)
app.get('/api/activities', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read by ID (GET)
app.get('/api/activities/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update (PUT)
app.put('/api/activities/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete (DELETE)
app.delete('/api/activities/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        // res.status(200).json({ message: 'Book deleted successfully' });
        res.status(200).sendFile(__dirname+"/deletesuccess.html")
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
 
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
