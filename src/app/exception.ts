import type { ErrorRequestHandler, RequestHandler } from 'express';
import mongoose from 'mongoose';
export const sendNotFoundError: RequestHandler = (_req, res) => {
    res.status(404).send({
        status: false,
        message: '無此路由資訊'
    });
};

export const catchCustomError: ErrorRequestHandler = (err, _req, res, _next) => {
    //通常發生在欄位沒填
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
            status: false,
            message: err.errors
        });
    }

    //通常發生在無效id
    if (err instanceof mongoose.Error.CastError) {
        return res.status(400).json({
            status: false,
            message: `錯誤id: ${err.value}`
        });
    }

    const status = err.statusCode || 500;
    const message = err.message || '伺服器錯誤，請聯絡管理員';
    return res.status(status).send({
        status: false,
        message
    });
};
