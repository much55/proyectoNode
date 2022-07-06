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
exports.create = exports.app = void 0;
const createRol_1 = require("../../../application/usecases/rol/createRol");
const Error_1 = require("../../../domain/exceptions/Error");
const Messages_1 = require("../../../domain/services/Messages");
const SecurityRoles_1 = require("../../../domain/services/SecurityRoles");
const RolRepositoryImpl_1 = require("../../implementations/RolRepositoryImpl");
const UserRepositoryImpl_1 = require("../../implementations/UserRepositoryImpl");
const express = require('express');
exports.app = express();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let createRol = new createRol_1.CreateRol(new RolRepositoryImpl_1.RolRepositoryImpl());
            let rolCreated = yield createRol.run(req.body);
            res.status(200).send(rolCreated);
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
