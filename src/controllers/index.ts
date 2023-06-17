import { Request, Response } from 'express'
import axios from 'axios'

import config from '../utils/config'
import { IVehicle, Vehicle } from '../types/index'
//import logger from '../utils/logger'

let VehicleArray: IVehicle[] = []

const helloWorld = (_req: Request, res: Response) => {
  try {
    const greeting = 'Hello world'

    res.status(200).json(greeting)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    }
  }
}

const indexPage = async (_req: Request, res: Response) => {
  const response = await axios.get(`${config.base_url}/hello`)

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

      const newCar = VehicleArray.find((el) => el.model === model)

      if (newCar) return res.status(201).send('Vehicle added')
    } else if (draft) {
      let boat = Vehicle.returnBoat(model, color, year, power, draft)

      VehicleArray.unshift({ ...boat })

      const newBoat = VehicleArray.find((el) => el.model === model)

      if (newBoat) return res.status(201).send('Vehicle added')
    } else if (wingSpan) {
      let plane = Vehicle.returnPlane(model, color, year, power, wingSpan)

      VehicleArray.unshift({ ...plane })

      const newPlane = VehicleArray.find((el) => el.model === model)

      if (newPlane) return res.status(201).send('Vehicle added')
    } else {
      let defaultVehicle = Vehicle.returnDefaultVehicle(
        model,
        color,
        year,
        power
      )

      VehicleArray.unshift({ ...defaultVehicle })

      const newDefault = VehicleArray.find((el) => el.model === model)

      if (newDefault) return res.status(201).send('Vehicle added')
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    }
  }
}

const fetchVehicleByModel = async (req: Request, res: Response) => {
  let { model } = req.params

  let allVehicle: IVehicle[] = JSON.parse(JSON.stringify(VehicleArray))

  const foundVehicle = allVehicle.find((el) => el.model === model)

  if (!foundVehicle) return res.status(404).end()
  try {
    return res.status(200).json(foundVehicle)
  } catch (err) {
    if (err instanceof Error) {

      res.status(400).json({ error: err.message })
    }
  }
}

export default {
  indexPage,
  helloWorld,
  addVehicle,
  fetchVehicleByModel,
}
