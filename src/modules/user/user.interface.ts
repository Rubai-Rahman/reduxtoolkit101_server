import { Model } from 'mongoose';

export type TUser = {
  _id?: string;
  authId?: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
  isActive: boolean;
  emailVerified?: boolean;
};

export type UserMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>;
  // eslint-disable-next-line no-unused-vars
  isEmailUserNameExists(username: string, email: string): Promise<TUser | null>;
};

export type userModel = Model<TUser, Record<string, never>, UserMethods>;
