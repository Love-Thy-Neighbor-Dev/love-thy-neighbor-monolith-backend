import type { Request, Response } from 'express';
import * as SignInService from '../../services/sign-in';

export function SignInController(req: Request, res: Response) {
  const result = SignInService.SignIn();

  res.json({ message: result });
}
