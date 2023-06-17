type TCar = {
  bodyType: string
  wheelCount: number
}

type TBoat = {
  draft: number
}

type TPlane = {
  wingSpan: number
}

interface IVehicle extends TCar, TBoat, TPlane {
  model: string
  color: string
  year: number
  power: number
}

class Vehicle {
  public model!: string
  public color!: string
  public year!: number
  public power!: number
  public bodyType!: string
  public wheelCount!: number
  public draft!: number
  public wingSpan!: number

  public static returnCar(
    model: string,
    color: string,
    year: number,
    power: number,
    bodyType: string,
    wheelCount: number
  ): Vehicle {
    const car = new Vehicle()
    car.model = model
    car.color = color
    car.year = year
    car.power = power
    car.bodyType = bodyType
    car.wheelCount = wheelCount

    return car
  }

  public static returnBoat(
    model: string,
    color: string,
    year: number,
    power: number,
    draft: number
  ): Vehicle {
    const boat = new Vehicle()
    boat.model = model
    boat.color = color
    boat.year = year
    boat.power = power
    boat.draft = draft

    return boat
  }
  public static returnPlane(
    model: string,
    color: string,
    year: number,
    power: number,
    wingSpan: number
  ): Vehicle {
    const plane = new Vehicle()
    plane.model = model
    plane.color = color
    plane.year = year
    plane.power = power
    plane.wingSpan = wingSpan

    return plane
  }
  public static returnDefaultVehicle(
    model: string,
    color: string,
    year: number,
    power: number
  ): Vehicle {
    const _defaultVehicle = new Vehicle()
    _defaultVehicle.model = model
    _defaultVehicle.color = color
    _defaultVehicle.year = year
    _defaultVehicle.power = power

    return _defaultVehicle
  }

}

export { Vehicle, IVehicle }
