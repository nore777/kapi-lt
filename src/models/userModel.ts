import mongoose, { Schema, model } from 'mongoose';
import { Role } from '@/types/role';


export interface IUser {
  username?: string,
  email?: string,
  password?: string,
  roles?: Role[],
  avatar?: string,
  firstName?: string,
  lastName?: string,
  bio?: string,
  location?: string,
  website?: string,
  isVerified?: boolean,
  createdAt?: Date,
  updatedAt?: Date
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    select: false
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  roles: {
    type: [String],
    required: true,
    default: ['user']
  },
  avatar: {
    type: String,
    default: "https://www.example.com/example.jpg"
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  location: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false
  }
}, { timestamps: true })

export default mongoose.models.User || model<IUser>('User', userSchema)
