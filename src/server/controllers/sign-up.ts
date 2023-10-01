import type { Request, Response } from 'express';
import * as SignUpService from '../../services/sign-up';

export function SignUpController(req: Request, res: Response) {
  const result = SignUpService.SignUp();

  res.json({ message: result });
}
