import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/JWT';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: 'Token not found' });
  }

  try {
    const token = authorization.replace('Bearer ', '');
    
    JWT.verify(token);
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Invalid token' });
  }
};

export default verifyToken;