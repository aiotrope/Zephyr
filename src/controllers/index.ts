import { Request, Response } from 'express'

const helloWorld = (_req: Request, res: Response) => {
  res.send('Hello World!')
}

export default {
  helloWorld,
}
