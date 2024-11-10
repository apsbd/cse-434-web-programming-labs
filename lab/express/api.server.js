const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// GET: Fetch all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// POST: Add a new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT: Update an item by ID
app.put('/api/items/:id', (req, res) => {
    const item = items.find((i) => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    res.json(item);
});

// DELETE: Remove an item by ID
app.delete('/api/items/:id', (req, res) => {
    const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    items.splice(itemIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('API server running on http://localhost:3000');
});
