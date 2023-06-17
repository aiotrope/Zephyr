"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    static returnCar(model, color, year, power, bodyType, wheelCount) {
        const car = new Vehicle();
        car.model = model;
        car.color = color;
        car.year = year;
        car.power = power;
        car.bodyType = bodyType;
        car.wheelCount = wheelCount;
        return car;
    }
    static returnBoat(model, color, year, power, draft) {
        const boat = new Vehicle();
        boat.model = model;
        boat.color = color;
        boat.year = year;
        boat.power = power;
        boat.draft = draft;
        return boat;
    }
    static returnPlane(model, color, year, power, wingSpan) {
        const plane = new Vehicle();
        plane.model = model;
        plane.color = color;
        plane.year = year;
        plane.power = power;
        plane.wingSpan = wingSpan;
        return plane;
    }
    static returnDefaultVehicle(model, color, year, power) {
        const _defaultVehicle = new Vehicle();
        _defaultVehicle.model = model;
        _defaultVehicle.color = color;
        _defaultVehicle.year = year;
        _defaultVehicle.power = power;
        return _defaultVehicle;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=index.js.map