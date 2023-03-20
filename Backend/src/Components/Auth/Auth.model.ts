import mongoose from 'mongoose';

interface IAuth extends Document {
  user: string;
  password: string;
  token: string;
}

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  User: String,
  Password: String,
  Token: String,
});

const model = mongoose.model<IAuth>('auth', AuthSchema);
export default model;

/**
 * 
 * Name: String,
  Photo: String,
  Schedule: String,
  Subjects: [{ type: String }],
  Contact: String,
 */
