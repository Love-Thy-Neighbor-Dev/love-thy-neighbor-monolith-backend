import { SignInRouter } from './sign-in';
import { SignUpRouter } from './sign-up';

import { Router } from 'express';
const RootLevelRouter = Router();

RootLevelRouter.use('/sign-in', SignInRouter);
RootLevelRouter.use('/sign-up', SignUpRouter);

export { RootLevelRouter };
