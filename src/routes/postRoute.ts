import { Router } from 'express';
const router = Router();

import * as posts from '@/controllers/posts';
router.get('/posts', posts.getPostsList);
router.post('/posts', posts.createPostsList);
router.delete('/posts', posts.deleteAllPostsList);
router.delete('/post/:id', posts.deleteOnePostsList);
router.patch('/post/:id', posts.editOnePostsList);
export default router;
