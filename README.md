## 🎬 ScreenSaga (OTT Platform)

ScreenSaga is a dynamic OTT-style streaming platform built with a modern full-stack architecture. It allows users to explore movies, web series, and trailers, manage watchlists, handle accounts, and interact via feedback—all in a single immersive interface.

---

## 🚀 Tech Stack

| Layer    | Technology Used                |
| -------- | ------------------------------ |
| Frontend | React JS, HTML, CSS, Bootstrap |
| Backend  | Spring Boot (REST Controllers) |
| Database | MySQL                          |
| API Data | JSON (integrations)            |
| Email    | SMTP for confirmation emails   |

---

## ✅ Features

### 👤 User Account Features

* User signup with **email verification**
* Password reset (restricted to **existing registered accounts only**)
* Account deletion from profile section
* Secure logout functionality

### 🎥 Media & Content Features

* Sections for:

  * **New Trailers**
  * **Popular Shows**
  * **Latest Movies & Web Series**
* No need to visit YouTube — **trailers available on the platform**
* Search availability for a specific movie or show
* Add favorites to personalized **Watchlist**
* Watchlist can be **managed in the profile**
* “Watch Now” button (UI currently — No Media)
* For web series, users can select **season and episode**
* “Continue Watching” section appears after clicking Watch Now

### 📩 Feedback System

* Users can submit:

  * Feedback
    
* Stored for backend review

---

## 🔗 Repositories

| Repo     | Description                                              |
| -------- | -------------------------------------------------------- |
| Frontend | `https://github.com/sravancipher/screensaga_frontend` |
| Backend  | `https://github.com/sravancipher/screensaga_springboot`  |


### ✅ Database Setup (MySQL)

Create a database named `screensaga` and configure your credentials in `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/screensaga
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

## 🔮 Future Enhancements

* Full media streaming support
* Subscription plans and payment integration
* User analytics and personalized AI recommendations
* Admin dashboard for content management
