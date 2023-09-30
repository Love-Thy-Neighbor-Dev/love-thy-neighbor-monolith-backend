import type { Request, Response } from 'express';

export default function SignUpController(req: Request, res: Response) {
  res.json({ message: 'Hi from SignUp' });
}
