import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default function(handler: (type: any) => Joi.ValidationResult<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = handler(req.body);
    if (error) return res.send(error.details[0].message);

    next();
  }
}