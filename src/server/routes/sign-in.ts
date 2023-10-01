import { Router } from 'express';

import { SignInController } from '../controllers/sign-in';

const SignInRouter = Router();
//I think we need to use the OOP way to be able to use methods like "UserController.updateProfile" etc maybe ? If not, how are we gonna deal with it ? A lot of seperate functions for each method ?
SignInRouter.get('/', SignInController);

export { SignInRouter };
