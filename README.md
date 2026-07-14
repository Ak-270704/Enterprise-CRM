# 🚀 Enterprise CRM System

A full-stack Enterprise Customer Relationship Management (CRM) application built using the **MERN Stack**. The application helps organizations efficiently manage leads, customers, deals, activities, and users through an intuitive dashboard and a secure role-based authentication system.

---

## 📌 Features

### 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes
- Role-Based Access Control (Admin, Manager, Sales)

---

### 📊 Dashboard
- Dashboard Overview
- Total Leads
- Total Customers
- Total Deals
- Total Activities
- Sales Analytics Chart
- Lead Status Pie Chart
- Recent Activities
- Live Dashboard Statistics

---

### 👥 Lead Management
- Add New Lead
- Edit Lead
- Delete Lead
- View Lead Details
- Search Leads
- Filter by Status
- Sort Leads
- Pagination
- Lead Statistics

---

### 🤝 Customer Management
- Add Customer
- Edit Customer
- Delete Customer
- View Customer Details
- Search Customers
- Filter Customers
- Sort Customers
- Pagination
- Customer Statistics

---

### 💼 Deal Management
- Create Deal
- Update Deal
- Delete Deal
- View Deal
- Search Deals
- Filter by Status
- Sort Deals
- Pagination
- Deal Statistics
- Sales Pipeline

---

### ✅ Activity Management
- Add Activity
- Edit Activity
- Delete Activity
- View Activity
- Search Activities
- Filter Activities
- Sort Activities
- Pagination
- Activity Statistics
- Due Date Indicators
- Overdue Detection

---

### 👨‍💼 Admin Panel
- Admin Dashboard
- User Management
- Add Users
- Edit Users
- Delete Users
- Activate / Deactivate Users
- Change User Roles
- KPI Dashboard
- System Overview
- Admin Profile
- Analytics Cards
- Recent Users
- Recent Activities

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Toastify
- React Icons
- Chart.js
- React ChartJS 2
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Express Validator

### Database
- MongoDB Atlas

---

# 📂 Project Structure

```
Enterprise-CRM
│
├── client
│   ├── src
│   │
│   ├── components
│   │   ├── admin
│   │   ├── dashboard
│   │   ├── leads
│   │   ├── customers
│   │   ├── deals
│   │   ├── activities
│   │   ├── layout
│   │   └── common
│   │
│   ├── pages
│   ├── services
│   ├── context
│   └── App.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── validations
│   ├── utils
│   └── server.js
│
└── README.md
```

---

# 📚 Modules Completed

## ✅ Module 1
Backend Setup

- Express Setup
- MongoDB Connection
- Folder Structure

---

## ✅ Module 2
Authentication

- Register
- Login
- JWT
- Password Encryption

---

## ✅ Module 3
Database Models

- User
- Lead
- Customer
- Deal
- Activity

---

## ✅ Module 4
REST APIs

- CRUD APIs
- Validation
- Error Handling

---

## ✅ Module 5
Frontend Setup

- React
- Vite
- Routing
- Layout

---

## ✅ Module 6
Authentication UI

- Login Page
- Register Page
- Protected Routes

---

## ✅ Module 7
Dashboard

- Dashboard Cards
- Charts
- Recent Activities

---

## ✅ Module 8
Lead Management

- CRUD
- Search
- Filter
- Sort
- Pagination

---

## ✅ Module 9
Customer Management

- CRUD
- Search
- Filter
- Sort
- Pagination

---

## ✅ Module 10
Deal Management

- CRUD
- Pipeline
- Statistics

---

## ✅ Module 11
Activity Management

- CRUD
- Due Date Indicators
- Statistics
- Search
- Pagination

---

## ✅ Module 12
Admin Panel

- Admin Dashboard
- User Management
- Analytics
- Charts
- KPI Cards
- System Overview
- Role Management

---

# 🔑 User Roles

### 👨‍💼 Admin

- Full Access
- Manage Users
- Dashboard Analytics
- Role Management
- System Monitoring

### 👨‍💼 Manager

- Manage Leads
- Customers
- Deals
- Activities

### 👨‍💻 Sales

- Manage Assigned CRM Records

---

# 📊 Dashboard Analytics

- Total Leads
- Total Customers
- Total Deals
- Total Activities
- Sales Performance
- Lead Status Distribution
- KPI Progress
- Recent Activities

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Secure Middleware
- Validation
- Error Handling

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Enterprise-CRM.git
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🌐 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Create a `.env` file inside the **client** directory.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📦 API Endpoints

## Authentication

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

---

## Leads

```
GET
POST
PUT
DELETE
/api/leads
```

---

## Customers

```
GET
POST
PUT
DELETE
/api/customers
```

---

## Deals

```
GET
POST
PUT
DELETE
/api/deals
```

---

## Activities

```
GET
POST
PUT
DELETE
/api/activities
```

---

## Admin

```
GET    /api/admin/dashboard

GET    /api/admin/users

POST   /api/admin/users

PUT    /api/admin/users/:id

DELETE /api/admin/users/:id
```

---

# 📈 Future Improvements

- Email Notifications
- File Uploads
- CRM Reports
- Excel Export
- Dark Mode
- Calendar Integration
- Real-time Notifications
- Multi-Tenant Support
- AI Sales Insights

---

# 👨‍💻 Author

**Akshat Kaushik**

B.Tech Computer Science & Engineering

Manav Rachna International Institute of Research and Studies

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.

---

# 📄 License

This project is developed for educational and learning purposes.
