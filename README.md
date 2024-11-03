### Class 5: Introduction to PHP and MySQL

#### **Class Outline**

**Objectives:**
1. Introduce server-side programming with PHP.
2. Cover basics of MySQL and database management.
3. Build a simple dynamic website that interacts with a MySQL database.

#### **Topics and Examples**

---

### 1. **Introduction to PHP**
   - **What is PHP?**
     - Server-side scripting language for web development.
     - Executes on the server, generating HTML for the client.

   - **PHP Syntax and Basic Structure**
     ```php
     <?php
     echo "Hello, World!";
     ?>
     ```
   - **Variables and Data Types**
     ```php
     <?php
     $name = "Mohiuddin";
     $age = 25;
     echo "Name: $name, Age: $age";
     ?>
     ```

   - **Basic PHP Functions**
     ```php
     <?php
     function greet($name) {
         return "Hello, $name!";
     }
     echo greet("Mohiuddin");
     ?>
     ```

---

### 2. **PHP and HTML Integration**
   - **Embedding PHP in HTML**
     ```html
     <html>
     <body>
         <h1><?php echo "Welcome to PHP and MySQL Class!"; ?></h1>
     </body>
     </html>
     ```
   - **Form Handling in PHP**
     - **Example: Simple Contact Form**
       ```html
       <form method="POST" action="process_form.php">
           <label for="name">Name:</label>
           <input type="text" id="name" name="name">
           <input type="submit" value="Submit">
       </form>
       ```
       - **process_form.php**
         ```php
         <?php
         $name = $_POST['name'];
         echo "Hello, $name!";
         ?>
         ```

---

### 3. **Introduction to MySQL**
   - **What is MySQL?**
     - Popular relational database management system.
     - Often used with PHP for storing data.

   - **Connecting PHP to MySQL**
     ```php
     <?php
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = "my_database";

     $conn = new mysqli($servername, $username, $password, $dbname);

     if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
     }
     echo "Connected successfully";
     ?>
     ```

---

### 4. **Basic SQL Commands**
   - **Creating a Database**
     ```sql
     CREATE DATABASE my_database;
     ```

   - **Creating a Table**
     ```sql
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(50),
         email VARCHAR(50)
     );
     ```

   - **Inserting Data into the Table**
     ```php
     <?php
     $sql = "INSERT INTO users (name, email) VALUES ('Mohiuddin', 'mohi@example.com')";
     if ($conn->query($sql) === TRUE) {
         echo "New record created successfully";
     } else {
         echo "Error: " . $sql . "<br>" . $conn->error;
     }
     ?>
     ```

   - **Fetching Data from the Database**
     ```php
     <?php
     $sql = "SELECT id, name, email FROM users";
     $result = $conn->query($sql);

     if ($result->num_rows > 0) {
         while($row = $result->fetch_assoc()) {
             echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
         }
     } else {
         echo "0 results";
     }
     ?>
     ```

---

### 5. **Lab Exercise: Creating a Dynamic Website with PHP and MySQL**

**Objective:** Build a simple website that allows users to register and view user data.

**Step-by-Step Guide:**
1. **Create a Database** called `web_lab`.
   ```sql
   CREATE DATABASE web_lab;
   ```

2. **Create a Table** `users`.
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(50),
       email VARCHAR(50),
       password VARCHAR(50)
   );
   ```

3. **Registration Form** in `register.php`.
   ```html
   <form method="POST" action="save_user.php">
       <label>Name:</label>
       <input type="text" name="name">
       <label>Email:</label>
       <input type="email" name="email">
       <label>Password:</label>
       <input type="password" name="password">
       <input type="submit" value="Register">
   </form>
   ```

4. **Save User Data** in `save_user.php`.
   ```php
   <?php
   $conn = new mysqli("localhost", "root", "", "web_lab");
   $name = $_POST['name'];
   $email = $_POST['email'];
   $password = $_POST['password'];

   $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
   if ($conn->query($sql) === TRUE) {
       echo "Registration successful!";
   } else {
       echo "Error: " . $sql . "<br>" . $conn->error;
   }
   ?>
   ```

5. **Display Users** in `view_users.php`.
   ```php
   <?php
   $conn = new mysqli("localhost", "root", "", "web_lab");
   $sql = "SELECT id, name, email FROM users";
   $result = $conn->query($sql);

   if ($result->num_rows > 0) {
       while($row = $result->fetch_assoc()) {
           echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
       }
   } else {
       echo "No users found";
   }
   ?>
   ```
