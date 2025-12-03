import { isNumber } from 'jet-validators';
import { transform } from 'jet-validators/utils';

import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import UserService from '@src/services/UserService';
import User, { UserCreateSchema, UserUpdateSchema } from '@src/models/User';

import { IReq, IRes } from './common/types';
import { parseReq } from './common/util';


const Validators = {
  add: parseReq({ user: UserCreateSchema }),
  update: parseReq({ user: UserUpdateSchema }),
  delete: parseReq({ id: transform(Number, isNumber) }),
} as const;


async function getAll(_: IReq, res: IRes) {
  const users = await UserService.getAll();
  res.status(HttpStatusCodes.OK).json({ users });
}

async function getOne(req: IReq, res: IRes) {
  const { id } = req.params;
  const user = await UserService.getOne(id);
  res.status(HttpStatusCodes.OK).json({ user });
}


async function add(req: IReq, res: IRes) {
  const { user } = Validators.add(req.body);
  await UserService.addOne(user);
  res.status(HttpStatusCodes.CREATED).json({ user });
}


async function update(req: IReq, res: IRes) {
  const { user } = Validators.update(req.body);
  await UserService.updateOne(user);
  res.status(HttpStatusCodes.OK).json({ user });
}

async function delete_(req: IReq, res: IRes) {
  const { id } = Validators.delete(req.params);
  await UserService.delete(id);
  res.status(HttpStatusCodes.OK).json({ message: "User deleted" });
}


export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;
