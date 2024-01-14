import express from 'express';
import cors from "cors";
import usersRouter from '../routers/users';

export default function (app: express.Express) {
  app.use(express.json());
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

  app.use('/register', usersRouter);
}