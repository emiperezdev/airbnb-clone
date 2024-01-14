import 'express-async-errors';
import express from "express";
import initializeDB from  './startup/db';
import routes from './startup/routes';

initializeDB();

const app = express();
routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
