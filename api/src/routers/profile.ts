import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import _ from 'lodash';

const profileRouter = Router();

profileRouter.get('', async (req, res) => {
  const { token } = req.cookies;
  if (!token) return null;

  const user = jwt.verify(token, config.get('jwtPrivateKey'));
  res.send(_.pick(user, ['_id', 'name', 'email']));
});

export default profileRouter;