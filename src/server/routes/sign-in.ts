import { Router } from 'express';
import type { Request, Response } from 'express';

const SignInRouter = Router();

SignInRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'SignIn World!' });
});

export { SignInRouter };
