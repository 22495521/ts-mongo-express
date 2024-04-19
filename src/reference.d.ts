import { IUser } from '@/models/user';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;

            DATABASE: string;
            DATABASE_PASSWORD: string;

            NODE_ENV: 'development' | 'production';
        }
    }
}
