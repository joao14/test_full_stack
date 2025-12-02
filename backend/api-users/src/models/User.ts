import { isEmail, isNumber, isString } from "jet-validators";


export interface IUser {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
}

export const UserCreateSchema = {
  name: isString,
  email: isString,
};

export const UserUpdateSchema = {
  id: isNumber,
  name: isString,
  email: isString,
};


const User = {
  test: {
    id: Number,
    name: isString,
    email: isEmail,
  }
};




export default User;
