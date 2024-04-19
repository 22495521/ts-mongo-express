import { Router } from 'express';
const router = Router();

router.get('/', (_req, res) => {
    res.status(200).json({
        message: '成功喔'
    });
});

export default router;
