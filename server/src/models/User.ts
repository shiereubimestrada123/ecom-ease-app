import { Document, Model, Schema, model } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: number;
  date: Date;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;
