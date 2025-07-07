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


export interface userModel extends Model<TUser> {
  isUserExists(authId: string | undefined): Promise<TUser | null>;
  isEmailExists(email: string): Promise<TUser | null>;
}