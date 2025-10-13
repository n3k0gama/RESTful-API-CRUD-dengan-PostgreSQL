# RESTful API CRUD dengan PostgreSQL

This project is a RESTful API built with Express.js and PostgreSQL. It provides CRUD (Create, Read, Update, Delete) operations for managing student data.

## Features
- Create, read, update, and delete students
- PostgreSQL database integration
- Organized code structure (controllers, models, routes, config)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- PostgreSQL

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/n3k0gama/RESTful-API-CRUD-dengan-PostgreSQL.git
   cd RESTful-API-CRUD-dengan-PostgreSQL/api_express_pg
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your database connection in `src/config/db.js` and environment variables in `kamp.env`.
4. Run the server:
   ```sh
   node index.js
   ```

## Project Structure
```
api_express_pg/
  index.js
  kamp.env
  package.json
  src/
    config/
      db.js
    controllers/
      studentsController.js
    models/
      studentsModel.js
    routes/
      studentsRoutes.js
```

## License
MIT
