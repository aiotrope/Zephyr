"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const logger_1 = tslib_1.__importDefault(require("./logger"));
const stream = {
    write: (message) => logger_1.default.http(message),
};
const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};
const morganMiddleware = (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', { stream, skip });
const endPoint404 = (_req, _res, next) => {
    next((0, http_errors_1.default)(404));
};
const errorHandler = (error, req, res, next) => {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    res.status(error.status || 500);
    res.render('error');
    next(error);
};
const middlewares = {
    morganMiddleware,
    endPoint404,
    errorHandler,
};
exports.default = middlewares;
//# sourceMappingURL=middlewares.js.map