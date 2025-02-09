### **CSE 434 Web Programming LAB - Class 2: HTML5 and CSS3 Fundamentals**

---

## **Class Outline:**
1. **Introduction to HTML5**
2. **Semantic HTML5 Elements**
3. **Forms and Multimedia in HTML5**
4. **Introduction to CSS3**
5. **CSS Layout Techniques (Flexbox & Grid)**
6. **CSS Transitions and Animations**
7. **Lab Activity: Building a Responsive Web Page**

---

## **1. Introduction to HTML5**
HTML5 is the latest version of Hypertext Markup Language, designed to improve the structure and accessibility of web pages.

### **Why HTML5?**
- Introduces new elements for better document structure.
- Supports multimedia (audio/video) without plugins.
- Enhances form elements for better user experience.

---

## **2. Semantic HTML5 Elements**
Semantic elements provide meaning to the content, making it easier for search engines and developers to understand.

### **Common Semantic Elements:**
| Element   | Purpose |
|-----------|---------|
| `<header>` | Represents introductory content |
| `<nav>` | Contains navigation links |
| `<section>` | Groups related content |
| `<article>` | Represents independent content |
| `<aside>` | Represents side content like ads or related links |
| `<footer>` | Contains footer information |

### **Example: Semantic HTML5 Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2>Latest News</h2>
            <p>This is an article about the latest news.</p>
        </article>
    </section>
    <aside>
        <p>Related articles</p>
    </aside>
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
```

---

## **3. Forms and Multimedia in HTML5**
HTML5 introduced better form controls and multimedia elements.

### **Form Elements:**
- `<input type="email">` (Email validation)
- `<input type="date">` (Date picker)
- `<input type="range">` (Slider)
- `<input type="number">` (Numeric input)
- `<textarea>` (Multiline text input)

### **Example: Contact Form**
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>

    <button type="submit">Send</button>
</form>
```

### **Multimedia Elements:**
- `<audio>` for sound files.
- `<video>` for embedding video.

### **Example: Embedding Audio and Video**
```html
<audio controls>
    <source src="music.mp3" type="audio/mpeg">
</audio>

<video controls width="500">
    <source src="video.mp4" type="video/mp4">
</video>
```

---

## **4. Introduction to CSS3**
CSS (Cascading Style Sheets) is used for styling HTML content.

### **Basic CSS Syntax:**
```css
selector {
    property: value;
}
```

### **Example:**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: blue;
    text-align: center;
}
```

---

## **5. CSS Layout Techniques (Flexbox & Grid)**
### **Flexbox:**
Flexbox helps in creating flexible, responsive layouts.

**Example: Centering Content Using Flexbox**
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### **Grid Layout:**
CSS Grid provides a two-dimensional layout system.

**Example: Grid Layout**
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}
```

---

## **6. CSS Transitions and Animations**
CSS3 allows smooth visual effects using transitions and animations.

### **Example: Button Hover Effect**
```css
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    transition: background-color 0.3s;
}

button:hover {
    background-color: darkblue;
}
```

### **Example: Keyframe Animation**
```css
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

.box {
    width: 50px;
    height: 50px;
    background: red;
    animation: bounce 1s infinite;
}
```

---

## **7. Lab Activity: Building a Responsive Web Page**
### **Objective:**
Create a responsive web page using HTML5 and CSS3.

### **Tasks:**
1. **HTML Structure**
   - Use semantic elements to create a structured webpage.
   - Include a form and multimedia elements.

2. **CSS Styling**
   - Apply Flexbox/Grid for responsive design.
   - Add transitions and animations for interactivity.

### **Learning Outcomes:**
- Understand semantic HTML5 elements and their usage.
- Implement responsive design using CSS3.
- Use transitions and animations for better user experience.
