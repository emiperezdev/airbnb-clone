import { Router } from 'express';
import { User, validateUser } from '../models/User';
import validate from '../middleware/validate';
import _ from 'lodash';

const usersRouter = Router();

usersRouter.post('', validate(validateUser), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.send('User already registered.');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));

  await user.validate();
  await user.save();
  res.send(_.pick(user, ['name', 'email']));
});

export default usersRouter;
;