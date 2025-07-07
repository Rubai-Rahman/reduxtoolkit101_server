import { User } from './user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  const user = new User(userData);
  if (await user.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }
  const result = await User.create(userData);
  return {
    userId: result.userId,
    username: result.username,
    fullName: user.fullName,
    age: result.age,
    email: result.email,
    isActive: result.isActive,
    hobbies: result.hobbies,
    address: result.address,
  };
};

export const UserServices = {
  createUserIntoDB,
};
