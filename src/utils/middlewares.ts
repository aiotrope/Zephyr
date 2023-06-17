import { Request, Response, NextFunction } from 'express'
import createHttpError, { HttpError } from 'http-errors'
import morgan, { StreamOptions } from 'morgan'
import logger from './logger'

const stream: StreamOptions = {
  write: (message) => logger.http(message),
}

const skip = () => {
  const env = process.env.NODE_ENV || 'development'

  return env !== 'development'
}

const morganMiddleware = morgan(
  //':remote-addr :method :url :status :res[content-length] - :response-time ms',
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
)

const endPoint404 = (_req: Request, _res: Response, next: NextFunction) => {
  next(createHttpError(404))
}

const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.message = error.message

  res.locals.error = req.app.get('env') === 'development' ? error : {}

  res.status(error.status || 500)

  res.render('error')

  next(error)
}

const middlewares = {
  morganMiddleware,
  endPoint404,
  errorHandler,
}

export default middlewares
