# Route Scheduling System

## Setup Instructions

1. **Clone the repository**  
   `git clone <your-repo-url>`

2. **Install dependencies**  
   `npm install`

3. **Configure environment variables**  
   Edit the `.env` file if needed (defaults provided):
   ```
   PORT=3000
   CONNECT=mongodb://localhost:27017/route-scheduling
   ```

4. **Start the server**  
   `npm start`

## Assumptions Made

- Each driver can only be assigned to one active route at a time.
- Drivers are assigned to routes only if their `availability` is `true`.
- If no drivers are available, the route is created as unassigned.
- Driver `id` is unique and used for lookup/history.
- MongoDB is running locally by default.

## Features Implemented

- **POST /routes**: Add a new route and auto-assign an available driver if possible.
- **POST /drivers**: Add a new driver.
- **GET /schedule**: View which driver is assigned to which route.
- **GET /drivers/:id/history**: View all past routes assigned to a specific driver.
- **GET /routes**: List all routes with pagination support.
- Error handling, security headers, CORS, and rate limiting included.
