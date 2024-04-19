import { Router } from 'express';
const router = Router();

import * as posts from '@/controllers/posts';
router.get('/', posts.getPostsList);
router.post('/', posts.createPostsList);
export default router;
