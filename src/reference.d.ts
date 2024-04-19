import { IUser } from '@/models/user';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;

            DATABASE: string;

            NODE_ENV: 'development' | 'production';
        }
    }
}
