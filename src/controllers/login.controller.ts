import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response | void> {
  const user = req.body;

  const result = await loginService.login({ ...user });

  return res.status(result.status).json(result.data);
}

export default {
  login,
};