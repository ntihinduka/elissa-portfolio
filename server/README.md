
# Portfolio Backend

This is the backend API for Ntihinduka Elissa's portfolio website.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcrypt for password hashing

## Getting Started

1. Install MongoDB Community Edition on your machine or use MongoDB Atlas
2. Clone this repository
3. Install dependencies:
   ```
   npm install
   ```
4. Create a .env file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_secure_jwt_secret_key
   ```
5. Seed the database (optional):
   ```
   node seed.js
   ```
6. Start the server:
   ```
   npm start
   ```
   
## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user

### Projects
- GET /api/projects - Get all projects
- POST /api/projects - Create a new project (requires authentication)
- PUT /api/projects/:id - Update a project (requires authentication)
- DELETE /api/projects/:id - Delete a project (requires authentication)

### Experiences
- GET /api/experiences - Get all experiences
- POST /api/experiences - Create a new experience (requires authentication)
- PUT /api/experiences/:id - Update an experience (requires authentication)
- DELETE /api/experiences/:id - Delete an experience (requires authentication)

### Skills
- GET /api/skills - Get all skills
- POST /api/skills - Create a new skill (requires authentication)
- PUT /api/skills/:id - Update a skill (requires authentication)
- DELETE /api/skills/:id - Delete a skill (requires authentication)

## Authentication

All authenticated routes require a valid JWT token to be included in the Authorization header:
```
Authorization: Bearer YOUR_TOKEN_HERE
```
