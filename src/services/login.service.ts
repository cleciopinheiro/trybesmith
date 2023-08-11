import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

import { Login } from '../types/Login';

import { User } from '../types/User';
import JWT from '../utils/JWT';

async function login(user: User): Promise<Login> {
  const result = await UserModel.findOne({ where: { username: user.username } });

  if (!result || !bcrypt.compareSync(user.password, result.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id } = result.dataValues;

  const tokenString = JWT.sign({ id });

  return { status: 200, data: { token: tokenString } };
}

export default {
  login,
};