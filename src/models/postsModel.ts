import { Schema, model, type Document } from 'mongoose';

interface Posts extends Document {
    name: string;
    tags: string;
    type: string;
    image: string;
    createAt: Date;
    content: string;
    likes: number;
    comments: number;
}

const postsSchema = new Schema<Posts>({
    name: {
        type: String,
        required: [true, '貼文姓名未填寫']
    },
    tags: [
        {
            type: String,
            required: [true, '貼文標籤 tags 未填寫']
        }
    ],
    type: {
        type: String,
        enum: ['group', 'person'],
        required: [true, '貼文類型 type 未填寫']
    },
    image: {
        type: String,
        default: ''
    },
    createAt: {
        type: Date,
        default: Date.now,
        select: false
    },
    content: {
        type: String,
        required: [true, 'Content 未填寫'],
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    }
});

export default model('posts', postsSchema);
