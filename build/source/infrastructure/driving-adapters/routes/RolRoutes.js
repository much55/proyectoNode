"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRol = void 0;
const RolRest_1 = require("../service/RolRest");
const express = require('express');
exports.appRol = express();
exports.appRol.use(express.json());
exports.appRol.post('/roles/', RolRest_1.create);
