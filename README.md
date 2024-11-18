### Class 7: Front-End Frameworks - React
**Objective:** Introduce students to React fundamentals, building components, managing state, and creating an interactive SPA.

---

#### **1. Introduction to React**
**Goal:** Understand the basics of React, including its architecture, components, props, state, and lifecycle methods.

**Topics:**
- **What is React?**
  React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM.
  **Example:** Facebook and Instagram interfaces are built using React.

- **React Core Concepts:**
  1. **Components:** Reusable building blocks of React apps.
     **Example:**
     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}!</h1>;
     }
     ```
  2. **Props (Properties):** Read-only inputs passed to components.
     **Example:**
     ```jsx
     <Welcome name="Mohiuddin" />
     ```
  3. **State:** Internal data storage for components that can change over time.
     **Example:**
     ```jsx
     class Counter extends React.Component {
       constructor(props) {
         super(props);
         this.state = { count: 0 };
       }
       increment = () => this.setState({ count: this.state.count + 1 });
       render() {
         return <button onClick={this.increment}>{this.state.count}</button>;
       }
     }
     ```
  4. **Lifecycle Methods:** Functions triggered during a component's lifecycle (mounting, updating, unmounting).
     **Example:** `componentDidMount` is used to fetch data after a component loads.

---

#### **2. Building Interactive UIs with React**
**Goal:** Learn how React handles interactivity using state and events.

**Topics:**
- **Handling Events in React:**
  React events are named using camelCase and are passed as functions.
  **Example:**
  ```jsx
  function handleClick() {
    alert('Button clicked!');
  }
  <button onClick={handleClick}>Click Me</button>
  ```

- **Conditional Rendering:**
  Render elements based on conditions.
  **Example:**
  ```jsx
  function Greeting(props) {
    if (props.isLoggedIn) {
      return <h1>Welcome Back!</h1>;
    } else {
      return <h1>Please Sign Up.</h1>;
    }
  }
  ```

- **Lists and Keys:**
  Rendering dynamic lists with unique keys.
  **Example:**
  ```jsx
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map((num) => <li key={num}>{num}</li>);
  return <ul>{listItems}</ul>;
  ```

---

#### **3. Lab: Creating a Single Page Application (SPA) with React**
**Goal:** Apply knowledge to create a basic SPA with routing and interactivity.

**Steps:**
1. **Setup:**
   - Install `create-react-app`:
     ```bash
     npx create-react-app my-spa
     cd my-spa
     npm start
     ```

2. **Create a Basic App Layout:**
   - Create components:
     - `Header.js`: Displays the title.
     - `Footer.js`: Displays the footer text.
     - `Home.js`, `About.js`: Content pages.

     **Example for `Header.js`:**
     ```jsx
     function Header() {
       return <header><h1>My SPA</h1></header>;
     }
     ```

3. **Add React Router for Navigation:**
   - Install React Router:
     ```bash
     npm install react-router-dom
     ```
   - Setup routes in `App.js`:
     ```jsx
     import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
     import Home from './Home';
     import About from './About';

     function App() {
       return (
         <Router>
           <nav>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
           </nav>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
           </Routes>
         </Router>
       );
     }
     ```

4. **Add State and Interactivity:**
   - Example: Counter in `Home.js`
     ```jsx
     import { useState } from 'react';

     function Home() {
       const [count, setCount] = useState(0);
       return (
         <div>
           <h2>Welcome to Home</h2>
           <button onClick={() => setCount(count + 1)}>Count: {count}</button>
         </div>
       );
     }
     ```

5. **Styling with CSS Modules:**
   - Example: `Home.module.css`
     ```css
     .button {
       background-color: blue;
       color: white;
       padding: 10px;
     }
     ```

   - Import and use in `Home.js`:
     ```jsx
     import styles from './Home.module.css';
     <button className={styles.button}>Styled Button</button>
     ```

6. **Final Touches and Testing:**
   - Test navigation and functionality.
   - Add error handling or a 404 page.

---

**Homework:**
1. Expand the SPA with a "Contact" page.
2. Use an external API (e.g., fetch and display data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)).

**Deliverables:**
- Fully functional SPA repository (submitted via Git).
- Code review in the next class.
