import { User } from './user.model';
import { TUser } from './user.interface';

const syncUserIntoDB = async (userData: TUser) => {
  if (!userData.authId) {
    throw new Error('authId is required to sync user');
  }
  // Check if user exists by authId
  const existingUser = await User.findOne({ authId: userData.authId });

  if (existingUser) {
    // Update user info if needed
    existingUser.name = userData.name || existingUser.name;
    existingUser.email = userData.email || existingUser.email;
    existingUser.picture = userData.picture || existingUser.picture;
    existingUser.emailVerified =
      userData.emailVerified ?? existingUser.emailVerified;

    // Save updated user
    await existingUser.save();

    return existingUser;
  } else {
    // Create new user with defaults
    const newUserData: TUser = {
      authId: userData.authId,
      name: userData.name,
      email: userData.email,
      role: 'user',
      picture: userData.picture,
      isActive: true,
      emailVerified: userData.emailVerified ?? false,
    };

    const newUser = await User.create(newUserData);
    return newUser;
  }
};

const createUserIntoDB = async (userData: TUser) => {
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
  syncUserIntoDB,
};
