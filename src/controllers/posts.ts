import postsModel from '@/models/postsModel';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/service/AppError';

export const getPostsList = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await postsModel.find({}, { __v: false });
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const createPostsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        const result = await postsModel.create({ ...body });
        const resultRes = await postsModel.findOne({ _id: result.id }, { __v: false });
        res.status(200).json({
            status: 'success',
            data: resultRes
        });
    } catch (error) {
        next(error);
    }
};

export const deleteAllPostsList = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await postsModel.deleteMany({});
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteOnePostsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await postsModel.findById(id);
        const result = await postsModel.deleteOne({ _id: id });
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const editOnePostsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await postsModel.findById(id);
        const { body } = req;
        await postsModel.findOneAndUpdate(
            { _id: id },
            { ...body },
            //回傳資料
            {
                new: true,
                runValidators: true
                // fields: '__v'
            }
        );

        res.status(200).json({
            status: 'success',
            data: '更新成功'
        });
    } catch (error) {
        next(error);
    }
};
