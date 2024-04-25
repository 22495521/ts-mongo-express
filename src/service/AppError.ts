import { NextFunction } from 'express';
export const AppError = (message: string, status: number, next: NextFunction) => {
    const err = new Error(message) as Error & { statusCode: number };
    err.statusCode = status;
    next(err);
};
