import { z } from 'zod';

const UserValidationSchema = z.object({
  _id: z.string().optional(), // usually handled by MongoDB
  authId: z.string().optional(),
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'Name cannot be empty' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  role: z.enum(['admin', 'member']).default('member'),
  picture: z
    .string()
    .url({ message: 'Picture must be a valid URL' })
    .optional(),
  isActive: z.boolean().default(true),
  emailVerified: z.boolean().optional(),
});

export { UserValidationSchema };
