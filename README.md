# 🧠 Code Editor Web App

A simple and powerful online **Python code editor** built using **ReactJS**, **Node.js**, and **Express**. It allows users to write, compile, and run Python code directly in the browser.



## 🌐 Live Demo

👉 [Click here to use the live app](https://python-compiler-v04h.onrender.com/)

---

## 🚀 Features

- ✍️ Real-time Python code editing
- ▶️ Run code and view output instantly
- 🌐 Fully deployed and live on Render
- 🔁 Automatic backend connection with Node.js
- 🖥️ Clean and responsive user interface

---

## 🛠 Tech Stack

| Frontend | Backend  | Deployment |
|----------|----------|-------------|
| ReactJS  | Node.js + Express | Render.com |
| HTML/CSS | Python (via child_process) | GitHub |

---

## 📁 Project Structure

CodeEditorProject/
│
├── client/ # React frontend
│ ├── public/
│ └── src/
│ └── App.js
│
├── server/ # Node backend
│ └── index.js
│
├── temp.py # Temporary Python code file
├── package.json
└── README.md


---

## 📦 Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/vivekthakur124/CodeEditorProject.git
cd CodeEditorProject

# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Go back and start the server
cd ..
node server/index.js

Visit http://localhost:5000 to use it locally.

** For deployment on Render or any other service, make sure to add: PORT = 8080 **

🙋‍♂️ Author
Vivek Singh Thakur
📧 viveksinght350@gmail.com
🔗 https://www.linkedin.com/in/vivek-singh-thakur-03b6121aa/
🔗 https://github.com/vivekthakur124

