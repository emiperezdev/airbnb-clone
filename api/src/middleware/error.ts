import { NextFunction, Request, Response } from "express";

export default function (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error.message, error);
  res.status(500).send("SOMETHING FAILED :/");
}
