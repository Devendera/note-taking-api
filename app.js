const express = require('express');
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

connectDB();

app.use(express.json());

app.use('/notes', notesRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
