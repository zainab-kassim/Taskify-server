import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

interface IUser extends Document {
    Username: string;
    Password: string;
}

const userSchema: Schema<IUser> = new Schema({
    Username: {
        type: String,
        unique: true,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const User = models?.User || model('User', userSchema);

export default User;