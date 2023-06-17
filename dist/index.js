"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const path_1 = tslib_1.__importDefault(require("path"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const config_1 = tslib_1.__importDefault(require("./utils/config"));
const middlewares_1 = tslib_1.__importDefault(require("./utils/middlewares"));
const logger_1 = tslib_1.__importDefault(require("./utils/logger"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//app.use(express.static('build'))
app.use(require('sanitize').middleware);
app.use(middlewares_1.default.morganMiddleware);
app.use('/', routes_1.default);
app.use(middlewares_1.default.endPoint404);
app.use(middlewares_1.default.errorHandler);
app.listen(config_1.default.port, () => {
    logger_1.default.http(`Server is running on port ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map