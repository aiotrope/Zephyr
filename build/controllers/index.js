"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = tslib_1.__importDefault(require("../utils/config"));
const logger_1 = tslib_1.__importDefault(require("../utils/logger"));
const helloWorld = (_req, res) => {
    const greeting = 'Hello world';
    res.send(greeting);
};
const index = (_req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${config_1.default.base_url}/hello`);
    logger_1.default.warn(response.data);
    res.render('index.ejs', { title: 'Zephyr', response: response.data });
});
exports.default = {
    index,
    helloWorld,
};
//# sourceMappingURL=index.js.map