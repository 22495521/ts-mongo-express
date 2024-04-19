import mongoose from 'mongoose';
const { DATABASE } = process.env;

export async function connectDB() {
    try {
        await mongoose.connect(DATABASE);
        console.log('成功連接資料庫');
    } catch (error) {
        console.log('資料庫連接失敗', error);
    }
}
