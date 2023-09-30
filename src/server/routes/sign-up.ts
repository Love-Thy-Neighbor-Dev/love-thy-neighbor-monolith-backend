import { Router } from 'express';

import SignUpController from '../controllers/sign-up';

const SignUpRouter = Router();

SignUpRouter.get('/', SignUpController);

export { SignUpRouter };
