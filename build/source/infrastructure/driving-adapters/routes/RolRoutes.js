"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const RolRest_1 = require("../service/RolRest");
const express = require('express');
exports.app = express();
exports.app.use(express.json());
exports.app.post('/roles/', RolRest_1.create);
exports = exports.app;
