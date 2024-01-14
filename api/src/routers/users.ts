import { Router } from 'express';
import { User, validateUser } from '../models/User';
import validate from '../middleware/validate';
import _ from 'lodash';
import bcrypt from 'bcrypt';

const usersRouter = Router();

usersRouter.post('', validate(validateUser), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.validate();
  await user.save();
  res.status(201).send(_.pick(user, ['name', 'email']));
});

export default usersRouter;
;