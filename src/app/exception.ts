import type { ErrorRequestHandler, RequestHandler } from 'express';
export const sendNotFoundError: RequestHandler = (_req, res) => {
    res.status(404).send({
        status: false,
        message: '無此路由資訊'
    });
};

export const catchCustomError: ErrorRequestHandler = (_err, _req, res, _next) => {
    return res.status(500).send({
        status: false,
        message: '伺服器錯誤'
    });
};
