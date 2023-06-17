"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const index_1 = tslib_1.__importDefault(require("../controllers/index"));
const router = express_1.default.Router();
router.get('/hello', index_1.default.helloWorld);
router.get('/', index_1.default.index);
exports.default = router;
//# sourceMappingURL=index.js.map