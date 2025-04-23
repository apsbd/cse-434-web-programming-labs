## 🔵 Class 5: Introduction to React & Building Your First App

**Duration:** 1 hour
**Goal:** Understand what React is, why it's useful, and build a basic component-based app.


#### 1️⃣ Introduction to React
- What is React?
  - JavaScript library for building user interfaces
  - Component-based architecture
- Why React?
  - Reusable components
  - Fast rendering with Virtual DOM
  - Backed by Facebook and large community

#### 2️⃣ JSX, Components, and Props
- **JSX Syntax**
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```
- **Functional Components**
  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
- **Props**
  ```jsx
  <Welcome name="Mohiuddin" />
  ```

### 💻 Mini Project: “User Profile Card”

#### ✨ Goal:
Build a card that displays a user’s name, image, and short bio using components and props.

#### 🔧 Features Covered:
- JSX
- Functional Components
- Props
- Styling (inline or simple CSS)

#### 📦 Folder Structure
```
src/
  App.js
  UserCard.js
  index.css
```

#### 📄 App.js
```jsx
import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <UserCard
        name="Mohiuddin"
        bio="Aspiring App Developer and React Teacher"
        img="https://i.pravatar.cc/150?img=3"
      />
    </div>
  );
}

export default App;
```

#### 📄 UserCard.js
```jsx
import React from "react";

function UserCard({ name, bio, img }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, width: 250 }}>
      <img src={img} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default UserCard;
```
