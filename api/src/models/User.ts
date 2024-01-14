import mongoose from "mongoose";
import Joi from "joi";
import IUser from "../dtos/IUser";
import jwt from "jsonwebtoken";
import config from "config";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 13,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id, name: this.name, email: this.email },
    config.get("jwtPrivateKey")
  );
  return token;
};

declare module "mongoose" {
  interface Document {
    generateAuthToken: () => string;
  }
}

const User = mongoose.model("User", userSchema);

function validateUser(user: IUser) {
  const schema = Joi.object({
    name: Joi.string().max(50).min(3).required(),
    email: Joi.string().min(13).max(50).email().required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(user);
}

export { User, validateUser };
