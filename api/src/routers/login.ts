import { Router } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import _ from 'lodash';

const loginRouter = Router();

loginRouter.post("", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  res.cookie('token', user.generateAuthToken());
  res.send(user);
});

export default loginRouter;
