import express from 'express';
import cors from "cors";
import usersRouter from '../routers/users';
import error from '../middleware/error';
import loginRouter from '../routers/login';

export default function (app: express.Express) {
  app.use(express.json());
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

  app.use('/register', usersRouter);
  app.use('/login', loginRouter);

  app.use(error);
}