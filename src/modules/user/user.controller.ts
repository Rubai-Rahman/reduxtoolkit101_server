import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

//syncUser
const syncUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.syncUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: 'User is sync successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//create User
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  syncUser,
};
