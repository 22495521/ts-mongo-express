import postsModel from '@/models/postsModel';
import { Request, Response, NextFunction } from 'express';

export const getPostsList = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await postsModel.find();
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
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteAllPostsList = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await postsModel.deleteMany();
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
        const result = await postsModel.deleteOne({ _id: id });
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};
