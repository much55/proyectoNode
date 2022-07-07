"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSales = void 0;
const SaleRest_1 = require("../service/SaleRest");
const express = require('express');
exports.appSales = express();
exports.appSales.use(express.json());
exports.appSales.get('/sales/:id', SaleRest_1.showForId);
exports.appSales.get('/sales/day/:day', SaleRest_1.showForDay);
exports.appSales.get('/sales/month/:month', SaleRest_1.showForMonth);
exports.appSales.get('/sales', SaleRest_1.show);
exports.appSales.post('/sales/', SaleRest_1.create);
exports.appSales.put('/sales/', SaleRest_1.update);
exports.appSales.delete('/sales/:id', SaleRest_1.remove);
exports = exports.appSales;
