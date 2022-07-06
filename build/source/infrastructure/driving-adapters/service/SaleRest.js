"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.showForId = exports.show = exports.update = exports.create = exports.app = void 0;
const SecurityRoles_1 = require("../../../domain/services/SecurityRoles");
const Error_1 = require("../../../domain/exceptions/Error");
const Messages_1 = require("../../../domain/services/Messages");
const UserRepositoryImpl_1 = require("../../implementations/UserRepositoryImpl");
const createSale_1 = require("../../../application/usecases/sale/createSale");
const SaleRepositoryImpl_1 = require("../../implementations/SaleRepositoryImpl");
const updateSale_1 = require("../../../application/usecases/sale/updateSale");
const showSales_1 = require("../../../application/usecases/sale/showSales");
const showSaleId_1 = require("../../../application/usecases/sale/showSaleId");
const deleteSale_1 = require("../../../application/usecases/sale/deleteSale");
const express = require('express');
exports.app = express();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let createSale = new createSale_1.CreateSale(new SaleRepositoryImpl_1.SaleRepositoryImpl());
            let saleCreated = yield createSale.run(req.body);
            res.status(200).send(saleCreated);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        error.code === undefined || null ? error.code = '' : error.code;
        let message = new Messages_1.Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let updateSale = new updateSale_1.UpdateSale(new SaleRepositoryImpl_1.SaleRepositoryImpl());
            let saleUpdated = yield updateSale.run(req.body);
            res.status(200).send(saleUpdated);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        error.code === undefined || null ? error.code = '' : error.code;
        let message = new Messages_1.Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
});
exports.update = update;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let showSales = new showSales_1.ShowSale(new SaleRepositoryImpl_1.SaleRepositoryImpl());
            let list = yield showSales.run();
            res.status(200).send(list);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        error.code === undefined || null ? error.code = '' : error.code;
        let message = new Messages_1.Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
});
exports.show = show;
const showForId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let showSaleForId = new showSaleId_1.ShowSaleId(new SaleRepositoryImpl_1.SaleRepositoryImpl());
            let list = yield showSaleForId.run(req.params.id);
            res.status(200).send(list);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        error.code === undefined || null ? error.code = '' : error.code;
        let message = new Messages_1.Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
});
exports.showForId = showForId;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let deleteSale = new deleteSale_1.DeleteSale(new SaleRepositoryImpl_1.SaleRepositoryImpl());
            let deletedRows = yield deleteSale.run(req.params.id);
            res.status(200).send("delete " + deletedRows + " row");
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        error.code === undefined || null ? error.code = '' : error.code;
        let message = new Messages_1.Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
});
exports.remove = remove;
