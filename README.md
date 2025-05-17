# Realtime Device Tracker Using Node.js & Socket.io

## 📦 1. Initialize Node Project

```bash
npm init -y
```

## 🔧 2. Install Required Packages

```bash
npm install express ejs socket.io nodemon
```

## 🔁 3. Setup Nodemon

Update your `package.json`:

```json
"scripts": {
  "start": "nodemon app.js"
}
```

## 🗂️ 4. Project Structure

```
project-root/
├── app.js
├── package.json
├── src/
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   ├── routes/
│   │   └── routers.js
│   ├── socket/
│   │   └── socketHandler.js
│   └── views/
│       └── index.ejs
```

## 🧪 5. Run the Project

```bash
npm start
```

Visit http://localhost:3000 in multiple tabs or devices to track users in real-time.