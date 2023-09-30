import type { Request, Response } from 'express';

export default function SignInController(req: Request, res: Response) {
  res.json({ message: 'Hi from SignIn' });
}
