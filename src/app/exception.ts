import type { ErrorRequestHandler, RequestHandler } from 'express';
export const sendNotFoundError: RequestHandler = (_req, res) => {
    res.status(404).send({
        status: false,
        message: '無此路由資訊'
    });
};

export const catchCustomError: ErrorRequestHandler = (err, _req, res, _next) => {
    console.log(err);
    const status = err.statusCode || 500;
    const message = err.message || '伺服器錯誤，請聯絡管理員';
    return res.status(status).send({
        status: false,
        message
    });
};
