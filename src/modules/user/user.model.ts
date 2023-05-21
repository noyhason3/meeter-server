import { Model, Schema, model } from 'mongoose';


export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    imgUrl?: string;
    gender?: string;
    birthday: Date;
}

export const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imgUrl: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    birthday: {
        type: Date,
        required: true
    }
});

const User: Model<IUser> = model<IUser>('User', UserSchema);
