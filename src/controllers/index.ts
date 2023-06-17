import { Request, Response } from 'express'
import axios from 'axios'

import config from '../utils/config'
import logger from '../utils/logger'
import { IVehicle, Vehicle } from '../types/index'

let VehicleArray: IVehicle[] = []

const helloWorld = (_req: Request, res: Response) => {
  try {
    const greeting = 'Hello world'

    res.status(200).json(greeting)
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message)
      res.status(400).json({ error: err.message })
    }
  }
}

const indexPage = async (_req: Request, res: Response) => {
  const response = await axios.get(`${config.base_url}/hello`)
  //logger.warn(response.data)

  res.render('index', { title: 'Zephyr', response: response.data })
}

const addVehicle = async (req: Request, res: Response) => {
  let { model, color, year, power, bodyType, wheelCount, draft, wingSpan } =
    req.body

  try {
    if (bodyType && wheelCount) {
      let car = Vehicle.returnCar(
        model,
        color,
        year,
        power,
        bodyType,
        wheelCount
      )

      VehicleArray.unshift({ ...car })

      logger.warn(VehicleArray)

      const newCar = VehicleArray.find((el) => el.model === model)

      if (newCar) return res.status(201).json({ message: Vehicle.message() })
    } else if (draft) {
      let boat = Vehicle.returnBoat(model, color, year, power, draft)

      VehicleArray.unshift({ ...boat })

      logger.warn(VehicleArray)
      const newBoat = VehicleArray.find((el) => el.model === model)

      if (newBoat) return res.status(201).json({ message: Vehicle.message() })
    } else if (wingSpan) {
      let plane = Vehicle.returnPlane(model, color, year, power, wingSpan)

      VehicleArray.unshift({ ...plane })

      logger.warn(VehicleArray)

      const newPlane = VehicleArray.find((el) => el.model === model)

      if (newPlane) return res.status(201).json({ message: Vehicle.message() })
    } else {
      let defaultVehicle = Vehicle.returnDefaultVehicle(
        model,
        color,
        year,
        power
      )

      VehicleArray.unshift({ ...defaultVehicle })

      logger.warn(VehicleArray)

      const newDefault = VehicleArray.find((el) => el.model === model)

      if (newDefault)
        return res.status(201).json({ message: Vehicle.message() })
    }
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message)
      res.status(400).json({ error: err.message })
    }
  }
}

export default {
  indexPage,
  helloWorld,
  addVehicle,
}
