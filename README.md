## 🔵 Class 6: State, Events, and Conditional Rendering

**Duration:** 1 hour
**Goal:** Introduce `useState`, handle user interactions, and update UI dynamically.

### 1️⃣ `useState` – React State
- Why state is needed: To store changing data like a follow status
- Import and use `useState`

```jsx
import { useState } from 'react';

const [isFollowing, setIsFollowing] = useState(false);
```

---

### 2️⃣ Event Handling
- Attach event to a button:

```jsx
<button onClick={() => setIsFollowing(!isFollowing)}>
  {isFollowing ? "Unfollow" : "Follow"}
</button>
```

- Explain how React re-renders the component when state changes.

---

### 3️⃣ Conditional Rendering
- Show different text/style based on state:

```jsx
{isFollowing && <p>You are following this user.</p>}
```

---

### 💻 Project Update: Add a “Follow” Button

#### 🔧 Modify `UserCard.js`

```jsx
import React, { useState } from "react";

function UserCard({ name, bio, img }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: 20, width: 250, minHeight: 500 }}>
      <img src={img} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        style={{ marginTop: "10px" }}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
      {isFollowing && <p style={{ color: "green" }}>You are following this user.</p>}
    </div>
  );
}

export default UserCard;
```
