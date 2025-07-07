import { User } from './user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  // const user = new User(userData);
  if (await User.isUserExists(userData.authId)) {
    throw new Error('User already exists');
  }
  if (await User.isEmailExists(userData.email)) {
    throw new Error('User already exists');
  }
  const result = await User.create(userData);
  return {
    result,
  };
};

export const UserServices = {
  createUserIntoDB,
};
