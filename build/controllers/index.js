"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = tslib_1.__importDefault(require("../utils/config"));
const index_1 = require("../types/index");
//import logger from '../utils/logger'
let VehicleArray = [];
const helloWorld = (_req, res) => {
    try {
        const greeting = 'Hello world';
        res.status(200).json(greeting);
    }
    catch (err) {
        if (err instanceof Error) {
            //logger.error(err.message)
            res.status(400).json({ error: err.message });
        }
    }
};
const indexPage = (_req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${config_1.default.base_url}/hello`);
    //logger.warn(response.data)
    res.render('index', { title: 'Zephyr', response: response.data });
});
const addVehicle = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let { model, color, year, power, bodyType, wheelCount, draft, wingSpan } = req.body;
    try {
        if (bodyType && wheelCount) {
            let car = index_1.Vehicle.returnCar(model, color, year, power, bodyType, wheelCount);
            VehicleArray.unshift(Object.assign({}, car));
            //logger.warn(VehicleArray)
            const newCar = VehicleArray.find((el) => el.model === model);
            if (newCar)
                return res.status(201).send('Vehicle added');
        }
        else if (draft) {
            let boat = index_1.Vehicle.returnBoat(model, color, year, power, draft);
            VehicleArray.unshift(Object.assign({}, boat));
            //logger.warn(VehicleArray)
            const newBoat = VehicleArray.find((el) => el.model === model);
            if (newBoat)
                return res.status(201).send('Vehicle added');
        }
        else if (wingSpan) {
            let plane = index_1.Vehicle.returnPlane(model, color, year, power, wingSpan);
            VehicleArray.unshift(Object.assign({}, plane));
            //logger.warn(VehicleArray)
            const newPlane = VehicleArray.find((el) => el.model === model);
            if (newPlane)
                return res.status(201).send('Vehicle added');
        }
        else {
            let defaultVehicle = index_1.Vehicle.returnDefaultVehicle(model, color, year, power);
            VehicleArray.unshift(Object.assign({}, defaultVehicle));
            // logger.warn(VehicleArray)
            const newDefault = VehicleArray.find((el) => el.model === model);
            if (newDefault)
                return res.status(201).send('Vehicle added');
        }
    }
    catch (err) {
        if (err instanceof Error) {
            //logger.error(err.message)
            res.status(400).json({ error: err.message });
        }
    }
});
const fetchVehicleByModel = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let { model } = req.params;
    let allVehicle = JSON.parse(JSON.stringify(VehicleArray));
    //logger.warn(allVehicle)
    const foundVehicle = allVehicle.find((el) => el.model === model);
    if (!foundVehicle)
        return res.status(404).end();
    try {
        return res.status(200).json(foundVehicle);
    }
    catch (err) {
        if (err instanceof Error) {
            //logger.error(err.message)
            res.status(400).json({ error: err.message });
        }
    }
});
exports.default = {
    indexPage,
    helloWorld,
    addVehicle,
    fetchVehicleByModel,
};
//# sourceMappingURL=index.js.map