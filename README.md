### **CSE 434 Web Programming LAB - Class 3: Advanced CSS and Responsive Design**

---

## **Class Overview**
📌 In this class, we will explore advanced CSS techniques to create fully responsive web designs.
📌 We will learn about media queries, CSS frameworks (Bootstrap and Tailwind CSS), and the mobile-first approach.
📌 By the end, you will build a **fully responsive web page**.

---

## **1. Introduction to Responsive Design**
Responsive design ensures a website adapts to various screen sizes (mobile, tablet, desktop). It improves **user experience** and **SEO ranking**.

### **🔹 Key Techniques in Responsive Design**
1. **Flexible Layouts** – Use percentages instead of fixed pixels.
2. **Media Queries** – Apply different styles for different screen sizes.
3. **CSS Frameworks** – Use pre-built tools like Bootstrap and Tailwind CSS.

### **Example: Non-Responsive vs. Responsive**
❌ **Non-Responsive Design** (Fixed Width)
```css
.container {
    width: 800px;
}
```
✅ **Responsive Design** (Fluid Width)
```css
.container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
}
```

---

## **2. Media Queries: Making Websites Responsive**
Media queries allow you to apply different styles based on screen size.

### **🔹 Syntax of a Media Query**
```css
@media (max-width: 768px) {
    body {
        background-color: lightgray;
    }
}
```
✅ **Explanation:** If the screen width is **768px or smaller**, the background color changes.

### **🔹 Common Media Query Breakpoints**
| Device Type | Screen Width |
|-------------|-------------|
| Extra Small (Phones) | max-width: 576px |
| Small (Tablets) | max-width: 768px |
| Medium (Laptops) | max-width: 992px |
| Large (Desktops) | max-width: 1200px |

## **3. Introduction to CSS Frameworks**
Frameworks like **Bootstrap and Tailwind CSS** make responsive design easier.

### **🔹 Bootstrap: A Pre-Designed CSS Framework**
- Uses a **12-column grid system** for layouts.
- Provides **built-in responsive components** (Navbar, Cards, Buttons).

#### **Example: Bootstrap Grid Layout**
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Left Section</div>
        <div class="col-md-6">Right Section</div>
    </div>
</div>
```
✅ **Effect:** Splits the page into **two equal columns** on medium and larger screens.

### **🔹 Tailwind CSS: A Utility-First CSS Framework**
- Provides **flexible, utility-based classes**.
- Requires **no additional CSS files**.

#### **Example: Tailwind Responsive Button**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
    Click Me
</button>
```
✅ **Effect:** A styled button that changes color when hovered.

---

## **4. Mobile-First Approach**
**Mobile-first** design means starting with a layout for **small screens first**, then adjusting for larger screens.

### **🔹 Mobile-First CSS Example**
```css
.container {
    font-size: 14px;
}

@media (min-width: 768px) {
    .container {
        font-size: 18px;
    }
}
```
✅ **Effect:** Small screens use `14px` font; larger screens use `18px`.

---

## **5. CSS Flexbox and Grid for Responsive Layouts**
### **🔹 Flexbox: Centering Content**
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```
✅ **Effect:** Centers content **horizontally and vertically**.

### **🔹 Grid: Two-Column Layout**
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}
```
✅ **Effect:** Creates **two columns** with space between them.

---

## **6. Lab Activity: Build a Responsive Web Page**
### **Objective:**
📌 Create a **fully responsive** webpage using **HTML, CSS, and Bootstrap/Tailwind**.

### **Tasks:**
1️⃣ **Set up a responsive layout** using Flexbox/Grid.
2️⃣ **Use media queries** to adjust styles based on screen size.
3️⃣ **Implement a responsive navbar** with Bootstrap or Tailwind CSS.

✅ **Features:**
✔ **Responsive Navbar**
✔ **Mobile-Friendly Layout**
✔ **Dynamic Background Colors**

---

## **7. Summary of Class 3**
🔹 **Media queries** make designs responsive.
🔹 **Bootstrap and Tailwind CSS** simplify styling.
🔹 **Mobile-first approach** enhances user experience.
🔹 **CSS Flexbox and Grid** help create modern layouts.

---

## **8. Homework & Next Steps**
📌 **Homework:**
- Modify the lab project to include **a responsive footer**.
- Explore additional Bootstrap/Tailwind components.
