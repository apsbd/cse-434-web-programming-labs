### **Class 4: JavaScript Essentials**

### **1. Introduction to JavaScript**
- What is JavaScript?
  1. **Definition and Role in Web Development**
   JavaScript is a programming language used to create interactive and dynamic web pages.
  2. **History and Evolution (ES5, ES6+)**
   JavaScript evolved from ES5 (introduced in 2009) to ES6+ (2015 and beyond), bringing features like `let/const`, arrow functions, classes, and async/await for improved performance and maintainability.

  3. **Client-Side vs. Server-Side JavaScript**
   - **Client-Side:** Runs in the browser, handling UI interactions and updates (e.g., DOM manipulation).
   - **Server-Side:** Runs on the server (e.g., Node.js), managing databases, authentication, and backend logic.
- Integration with HTML and CSS
  - Inline, Internal, and External Scripts
  - Linking JavaScript File in HTML:
    ```html
    <script src="app.js"></script>
    ```

---

### **2. JavaScript Basics and Syntax**
- **Variables and Data Types:**
  - `var`, `let`, and `const`
  - Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol
  - Reference Data Types: Objects, Arrays, Functions

  **Example:**
  ```js
  let name = "John Doe";
  const pi = 3.14159;
  var age = 30;
  let isStudent = true;
  ```

- **Operators:**
  - Arithmetic: `+`, `-`, `*`, `/`, `%`
  - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  - Logical: `&&`, `||`, `!`
  - Assignment: `=`, `+=`, `-=`, `*=`, `/=`

  **Example:**
  ```js
  let a = 10;
  let b = 5;
  console.log(a + b); // 15
  console.log(a > b); // true
  ```

---

### **3. Control Structures**
- **Conditional Statements:**
  - `if`, `else if`, `else`, `switch`

  **Example:**
  ```js
  let grade = 85;
  if (grade >= 90) {
      console.log("A");
  } else if (grade >= 80) {
      console.log("B");
  } else {
      console.log("C");
  }
  ```

- **Loops:**
  - `for`, `while`, `do...while`, `for...of`, `for...in`

  **Example:**
  ```js
  for (let i = 1; i <= 5; i++) {
      console.log(i); // 1, 2, 3, 4, 5
  }
  ```

---

### **4. Functions**
- **Function Declaration and Invocation:**
  ```js
  function greet(name) {
      return "Hello, " + name;
  }
  console.log(greet("Alice"));
  ```

- **Arrow Functions (ES6+):**
  ```js
  const add = (x, y) => x + y;
  console.log(add(5, 3)); // 8
  ```

- **Callback Functions:**
  ```js
  function fetchData(callback) {
      setTimeout(() => {
          callback("Data loaded");
      }, 1000);
  }
  fetchData((message) => console.log(message));
  ```

---

### **5. DOM Manipulation (30 minutes)**
- **Selecting Elements:**
  - `document.getElementById()`
  - `document.querySelector()`
  - `document.getElementsByClassName()`

- **Modifying Content and Styles:**
  ```js
  const title = document.getElementById('title');
  title.innerHTML = "Welcome to JavaScript!";
  title.style.color = "blue";
  ```

- **Event Handling:**
  ```js
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
      alert('Button clicked!');
  });
  ```

---

### **6. ES6+ Features**
- **Template Literals:**
  ```js
  let name = "Alice";
  console.log(`Hello, ${name}`);
  ```

- **Destructuring:**
  ```js
  const person = { name: "Bob", age: 25 };
  const { name, age } = person;
  console.log(name, age);
  ```

- **Promises:**
  ```js
  const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data loaded");
      }, 2000);
  });
  fetchData.then(data => console.log(data));
  ```

- **Async/Await:**
  ```js
  async function getData() {
      let data = await fetchData;
      console.log(data);
  }
  getData();
  ```

---


## **Lab: Building a To-Do List App Using Vanilla JS**

### **Objective:**
Create a dynamic to-do list application to practice components and state management. This will illustrate how React simplifies state updates and component re-renders.

---

### **Features to Implement:**
1. **Add New To-Do Item:**
   - Input field to type a new to-do.
   - Button to add the to-do to the list.
2. **Delete To-Do Item:**
   - Button next to each to-do to delete it.
3. **Toggle To-Do Completion:**
   - Click on a to-do to toggle its completion state (strike-through if completed).

---

### **Step-by-Step Implementation:**

#### **1. Setting up HTML Structure:**
```html
<div id="app">
  <h1>To-Do List</h1>
  <input type="text" id="new-todo" placeholder="Add new to-do" />
  <button id="add-todo">Add</button>
  <ul id="todo-list"></ul>
</div>
```

---

#### **2. JavaScript Implementation:**

```js
// State Management using Closure
const todoApp = (() => {
  let todos = [];

  // Component: Todo Item
  function createTodoItem(todo, index) {
    const li = document.createElement('li');
    li.innerText = todo.text;
    li.style.textDecoration = todo.completed ? 'line-through' : 'none';

    // Toggle Completion
    li.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      render();
    });

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent toggle on click
      todos.splice(index, 1);
      render();
    });

    li.appendChild(deleteButton);
    return li;
  }

  // Component: Todo List
  function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
      todoList.appendChild(createTodoItem(todo, index));
    });
  }

  // Add New Todo
  function addTodo() {
    const input = document.getElementById('new-todo');
    const text = input.value.trim();
    if (text !== '') {
      todos.push({ text, completed: false });
      input.value = '';
      render();
    }
  }

  // Event Listener for Add Button
  document.getElementById('add-todo').addEventListener('click', addTodo);

  return {
    addTodo
  };
})();
```
