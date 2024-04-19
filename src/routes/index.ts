import { Router } from 'express';
const routes = Router();
import post from '@/routes/postRoute';

routes.use('/', post);

export default routes;
