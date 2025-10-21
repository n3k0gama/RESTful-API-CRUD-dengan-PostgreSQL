
# User Management API

Comprehensive documentation for the User Management REST API built with Node.js, Express, and PostgreSQL. This project provides endpoints to register, authenticate, and manage users, and supports file uploads (profile pictures) via Cloudinary.

## Features

- User registration and authentication (JWT)
- File upload support (Cloudinary)
- RESTful controllers, models, and routes
- PostgreSQL integration via `pg`

## Prerequisites

- Node.js 14+ (or compatible)
- npm or yarn
- PostgreSQL server
- Cloudinary account (for file uploads) — optional but recommended

## Installation

1. Clone the repo and change into the folder:

	 git clone <repo-url>
	 cd RESTful-API-CRUD-dengan-PostgreSQL

2. Install dependencies inside the `user_management_api` folder:

	 cd user_management_api
	 npm install

3. Create environment file

	 Copy ` .env.example` to `.env` and fill in your values.

4. Start the server

	 node index.js

	 or if a script is defined in `package.json`:

	 npm start

## Environment Variables

Use `user_management_api/.env.example` as a template. Important variables:

- DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME — PostgreSQL connection
- CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET — Cloudinary
- JWT_SECRET, JWT_EXPIRES_IN — JWT auth settings
- PORT — server port

## API Endpoints

Base URL: http://localhost:<PORT>

Auth

- POST /auth/register
	- Register a new user
	- Body (JSON): { "name": "", "email": "", "password": "" }
	- Returns: created user (without password) and token

- POST /auth/login
	- Authenticate a user
	- Body (JSON): { "email": "", "password": "" }
	- Returns: user data and JWT token

Users (protected — require Authorization: Bearer <token>)

- GET /users
	- List users

- GET /users/:id
	- Get single user by id

- PUT /users/:id
	- Update user (profile fields)

- DELETE /users/:id
	- Delete user

File uploads

- POST /users/:id/avatar
	- Upload or replace a user's avatar
	- Multipart/form-data with file field `avatar`

## File structure

- index.js — app entry
- package.json — dependencies and scripts
- src/
	- config/
		- db.js — database connection
		- cloudinary.js — cloudinary config
	- controllers/ — controllers for routes
	- middleware/ — auth and upload middleware
	- models/ — database models
	- routes/ — route definitions
	- uploads/ — temporary or example upload files

## Tests

There are no automated tests included by default. Add tests with your preferred framework (Jest, Mocha).

## Deployment

- Ensure environment variables are set on the target platform.
- Use a process manager such as PM2 or host on a platform (Heroku, Railway, Vercel serverless functions with adjustments, etc.).

## Security notes

- Never commit `.env` files to source control. Use `.env.example` to provide variable names.
- Use strong secrets for `JWT_SECRET` and secure the database credentials.

## Troubleshooting

- Database connection errors: verify Postgres is running and values in `.env` are correct.
- Upload errors: check Cloudinary credentials and network access.

## Contributing

Open issues or PRs to improve the project.

---

Last updated: 2025-10-22
