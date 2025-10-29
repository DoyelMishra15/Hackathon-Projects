# 🍔 CampusCanteen

**CampusCanteen** is a simple yet modern Flask-based web application that simulates a college cafeteria ordering system.  
It allows users to enter their name, choose an item from the menu, specify the quantity, and instantly receive an order confirmation with a unique order ID.

---

## 🚀 Features

- 🧾 User-friendly ordering form  
- 💅 Beautiful, modern UI with a centered card layout  
- ⚡ Instant order confirmation with random Order ID  
- 🧠 Built using Flask (Python microframework)  
- 💻 Responsive design for desktop and mobile  

---

## 🧩 Project Structure

```
campuscanteen/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── __pycache__/                
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── node_modules/               
    │
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        │
        └── components/
            ├── OrderForm.jsx
            └── Confirmation.jsx

```

---

## ⚙️ Major Functions

| Function | Description |
|-----------|--------------|
| `order()` | Receives order details (name, item, quantity), generates a random Order ID, and returns a confirmation response in JSON format |

---

## 🧱 Dependencies

| Package | Version | Description |
|----------|----------|-------------|
| **Flask** | Latest | Python web framework used to build the backend API |
| **Flask-CORS** | Latest | Enables cross-origin requests between frontend and backend |

---

## 🧠 Future Improvements

 - Add login/signup for customers
 - Add live order tracking
 - Integrate database (SQLite/MySQL) for storing orders
 - Admin dashboard to manage menu and view orders
