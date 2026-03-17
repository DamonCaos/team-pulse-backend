# 🚀 TeamPulse API

Backend API for managing teams, users and performance tracking in real-time environments.

> ⚠️ Project under active development. This repository is being built incrementally to simulate a real production-ready backend.

---

## 🧠 Project Goal

TeamPulse is designed to simulate a real-world backend architecture focused on:

- Team management
- User roles & permissions
- Performance tracking (check-ins)
- Scalable and maintainable backend structure

This project is part of my continuous learning process after completing a Fullstack Bootcamp.

---

## 🏗️ Current Features (v0.1)

- ✅ Teams module
  - Create team
  - List teams
- ✅ PostgreSQL integration (Docker)
- ✅ Prisma ORM setup
- ✅ Environment validation
- ✅ Global validation pipes
- ✅ Swagger API documentation

---

## ⚙️ Tech Stack

- **Backend:** NestJS
- **Database:** PostgreSQL (Docker)
- **ORM:** Prisma
- **Language:** TypeScript
- **Validation:** class-validator
- **Docs:** Swagger

---

## 📦 Installation

```bash
npm install
```

---

## 🐳 Run database (Docker)

```bash
docker compose up -d
```

---

## ▶️ Run the project

```bash
npm run start:dev
```

---

## 🔑 Environment variables

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/teampulse"
```

---

## 📚 API Documentation

Available at:

```
http://localhost:3000/docs
```

---

## 🧪 Example Endpoints

### Create Team

```
POST /teams
```

```json
{
  "name": "Dev Team",
  "description": "Backend developers"
}
```

### Get Teams

```
GET /teams
```

---

## 🗺️ Roadmap

Next steps:

- 🔒 Authentication (JWT)
- 👤 User-Team relationship (owner)
- 🔐 Role-based access (ADMIN / USER)
- 📊 Check-ins system
- 📡 Real-time updates (WebSockets)

---

## 📌 Notes

This project is being built step by step to reflect real backend development practices, including:

- Clean architecture
- Modular design
- Incremental feature delivery
- Production-oriented decisions

---

## 👨‍💻 Author

Francisco Javier Rodríguez  
Fullstack Developer (MERN)  
Transitioning into backend-focused roles

---

## 📄 License

MIT