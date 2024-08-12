Simple Note-Taking API:

Description:

This is a RESTful API for a simple note-taking application built with Node.js, Express, and MongoDB. It allows users to create, fetch, query, and update notes.

Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/Devendera/note-taking-api.git

2. Install dependencies:
npm install

3. Set up MongoDB using MongoDB Compass or any other method.

4. Start the development server:
npm run dev

Endpoints
POST /notes/: Create a new note.
GET /notes/:id: Fetch a note by its primary key.
GET /notes?title=<substring>: Query notes by title substring.
PUT /notes/:id: Update an existing note.
Testing with Swagger UI
Visit http://localhost:3000/api-docs to access Swagger UI.
Use the Swagger interface to test the API endpoints.



