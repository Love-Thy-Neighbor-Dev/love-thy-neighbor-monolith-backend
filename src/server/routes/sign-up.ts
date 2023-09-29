import { Router } from 'express';
import type { Request, Response } from 'express';

const SignUpRouter = Router();

SignUpRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'SignUp World!' });
});

export { SignUpRouter };
