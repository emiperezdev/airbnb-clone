import { Router } from 'express';

const logoutRouter = Router();

logoutRouter.post('', (_req, res) => {
  res.cookie('token', '');
  res.send('logout');
});

export default logoutRouter;