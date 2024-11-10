### Class 6: Node.js and Express.js

#### Class Objectives:
1. Understand the fundamentals of Node.js and its event-driven architecture.
2. Learn how to use Node Package Manager (NPM) to manage dependencies.
3. Explore modules in Node.js for organizing code.
4. Build a RESTful API using Express.js.

#### Prerequisites:
- Familiarity with JavaScript basics, including ES6 syntax.
- Understanding of HTTP and basic server-client communication.

---

### Class Outline:

1. **Introduction to Node.js**
   - What is Node.js?
   - Understanding the JavaScript runtime environment.
   - Event-driven, non-blocking I/O model.

   **Answer:**
   Node.js is a server-side platform that runs JavaScript code outside of a browser, built on Google Chrome's V8 engine. It allows JavaScript to be used for backend development.

2. **Setting Up Node.js**
   - Installing Node.js and NPM.
   - Running `node -v` and `npm -v` to verify installation.

3. **Modules in Node.js**
   - Built-in modules: `fs`, `http`, `path`.
   - Creating and using custom modules.

   **Example**:
   ```javascript
   // math.js (Custom Module)
   function add(a, b) {
       return a + b;
   }

   module.exports = { add };

   // main.js (Importing the Module)
    const math = require('./math');
    console.log('Answer is: ', math.add(5, 3)); // Output: 8
   ```

4. **Creating a Basic HTTP Server in Node.js**
   - Using the `http` module to create a simple server.
   - Handling requests and responses.

   **Example**:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello, World!');
   });

   server.listen(3000, () => {
       console.log('Server running at http://localhost:3000/');
   });
   ```

   **Answer:**
   This server listens on port 3000 and responds with "Hello, World!" when accessed.

5. **Introduction to Express.js**
   - What is Express.js?
     **Answer:**
     Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
   - Benefits of using Express over the native `http` module.

6. **Setting Up an Express Server (20 mins)**
   - Installing Express: `npm install express`
   - Basic server setup with Express.

   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
       res.send('Hello, Express!');
   });

   app.listen(3000, () => {
       console.log('Express server running on http://localhost:3000');
   });
   ```

   **Answer:**
   This Express server listens on port 3000 and responds with "Hello, Express!" when accessed.

7. **Building RESTful APIs with Express**
   - Understanding RESTful concepts: GET, POST, PUT, DELETE.
   - Creating routes and handling requests.
   - Example: Building a simple API for managing a list of items.

   **Code Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   let items = [
       { id: 1, name: 'Item 1' },
       { id: 2, name: 'Item 2' },
   ];

   // GET: Fetch all items
   app.get('/api/items', (req, res) => {
       res.json(items);
   });

   // POST: Add a new item
   app.post('/api/items', (req, res) => {
       const newItem = {
           id: items.length + 1,
           name: req.body.name,
       };
       items.push(newItem);
       res.status(201).json(newItem);
   });

   // PUT: Update an item by ID
   app.put('/api/items/:id', (req, res) => {
       const item = items.find(i => i.id === parseInt(req.params.id));
       if (!item) return res.status(404).send('Item not found');

       item.name = req.body.name;
       res.json(item);
   });

   // DELETE: Remove an item by ID
   app.delete('/api/items/:id', (req, res) => {
       const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
       if (itemIndex === -1) return res.status(404).send('Item not found');

       items.splice(itemIndex, 1);
       res.status(204).send();
   });

   app.listen(3000, () => {
       console.log('API server running on http://localhost:3000');
   });
   ```

   **Explanation**:
   - **GET `/api/items`**: Fetches all items in the list.
   - **POST `/api/items`**: Adds a new item to the list. The item data is sent in the request body.
   - **PUT `/api/items/:id`**: Updates an existing item by ID.
   - **DELETE `/api/items/:id`**: Deletes an item from the list by ID.

### Lab Exercise:

**Objective**: Build a small REST API with Express that manages a list of books.

1. **Setup**:
   - Initialize a new Node.js project with `npm init -y`.
   - Install Express: `npm install express`.

2. **API Requirements**:
   - Create endpoints to `GET`, `POST`, `PUT`, and `DELETE` books.
   - Each book should have an `id`, `title`, and `author`.

3. **Code**:
   ```javascript
   const express = require('express');
   const app = express();
   app.use(express.json());

   let books = [];

   // GET: List all books
   app.get('/api/books', (req, res) => res.json(books));

   // POST: Add a new book
   app.post('/api/books', (req, res) => {
       const newBook = {
           id: books.length + 1,
           title: req.body.title,
           author: req.body.author,
       };
       books.push(newBook);
       res.status(201).json(newBook);
   });

   // PUT: Update a book by ID
   app.put('/api/books/:id', (req, res) => {
       const book = books.find(b => b.id === parseInt(req.params.id));
       if (!book) return res.status(404).send('Book not found');

       book.title = req.body.title;
       book.author = req.body.author;
       res.json(book);
   });

   // DELETE: Delete a book by ID
   app.delete('/api/books/:id', (req, res) => {
       const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
       if (bookIndex === -1) return res.status(404).send('Book not found');

       books.splice(bookIndex, 1);
       res.status(204).send();
   });

   app.listen(3000, () => console.log('Server running on http://localhost:3000'));
   ```
