import mongoose from 'mongoose';
import { TUser, userModel } from './user.interface';

const { Schema, model } = mongoose;
const userSchema = new Schema<TUser, userModel>({
  authId: {
    type: String,
    required: [true, 'authId is required'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name must be under 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'member'],
    default: 'member',
  },
  picture: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
});

// Custom static method to check user existence by authId
userSchema.statics.isUserExists = async function (
  authId: string,
): Promise<TUser | null> {
  return this.findOne({ authId });
};

// Optional: custom static to check user by email
userSchema.statics.isEmailExists = async function (
  email: string,
): Promise<TUser | null> {
  return this.findOne({ email });
};

export const User = model<TUser, userModel>('User', userSchema);
