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
│   └── requirements.txt
│
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── OrderForm.jsx
    │   │   └── Confirmation.jsx
    │   └── index.css
    └── public/
        └── index.html

```

---

## ⚙️ Major Functions

| Function | Description |
|-----------|--------------|
| `home()` | Renders the main menu (`index.html`) |
| `order()` | Handles order form submission, generates random Order ID, and displays confirmation page |

---

## 🧱 Dependencies

| Package | Version | Description |
|----------|----------|-------------|
| **Flask** | Latest | Python web framework used for routing and templating |

To install Flask:
```bash
python3 -m pip install flask
```
▶️ How to Run Locally

1.Clone this repository:
```bash
git clone https://github.com/DoyelMishra15/Hackathon-Projects.git
```

2.Navigate to the project folder:
```bash
cd Hackathon-Projects/campuscanteen
```

3.(Optional) Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

4.Install dependencies:
```bash
pip install flask
```

5.Run the application:
```bash
python3 app.py
```

6.Open your browser and visit:
```bash
http://127.0.0.1:5000/
```

---

## 🧠 Future Improvements

 - Add login/signup for customers
 - Add live order tracking
 - Integrate database (SQLite/MySQL) for storing orders
 - Admin dashboard to manage menu and view orders
