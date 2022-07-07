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
const createUser_1 = require("../../../application/usecases/user/createUser");
const showUsers_1 = require("../../../application/usecases/user/showUsers");
const SecurityRoles_1 = require("../../../domain/services/SecurityRoles");
const Error_1 = require("../../../domain/exceptions/Error");
const Messages_1 = require("../../../domain/services/Messages");
const updateUser_1 = require("../../../application/usecases/user/updateUser");
const showUserId_1 = require("../../../application/usecases/user/showUserId");
const deleteUser_1 = require("../../../application/usecases/user/deleteUser");
const UserRepositoryImpl_1 = require("../../implementations/UserRepositoryImpl");
const express = require('express');
exports.app = express();
const manageException = (error, res) => {
    error.code === undefined || null ? error.code = '' : error.code;
    let message = new Messages_1.Messages(error.code.toString());
    res.status(message.exception.getCode()).send(message.exception.getMessage());
};
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let createUser = new createUser_1.CreateUser(new UserRepositoryImpl_1.UserRepositoryImpl());
            let usersCreated = yield createUser.run(req.body);
            res.status(200).send(usersCreated);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        manageException(error, res);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let updateUser = new updateUser_1.UpdateUser(new UserRepositoryImpl_1.UserRepositoryImpl());
            let usersupdated = yield updateUser.run(req.body);
            res.status(200).send(usersupdated);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        manageException(error, res);
    }
});
exports.update = update;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let showUsers = new showUsers_1.ShowUsers(new UserRepositoryImpl_1.UserRepositoryImpl());
            let list = yield showUsers.run();
            res.status(200).send(list);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        manageException(error, res);
    }
});
exports.show = show;
const showForId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let showUserForId = new showUserId_1.ShowUserForId(new UserRepositoryImpl_1.UserRepositoryImpl());
            let list = yield showUserForId.run(req.params.id);
            res.status(200).send(list);
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        manageException(error, res);
    }
});
exports.showForId = showForId;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let securityRoles = new SecurityRoles_1.SecurityRoles(new UserRepositoryImpl_1.UserRepositoryImpl(), "*");
        yield securityRoles.run(req.headers.auth);
        if (securityRoles.authorized) {
            let deleteUser = new deleteUser_1.DeleteUser(new UserRepositoryImpl_1.UserRepositoryImpl());
            let deletedRows = yield deleteUser.run(req.params.id);
            res.status(200).send("delete " + deletedRows + " row");
        }
        else
            throw new Error_1.Errors("unauthorized");
    }
    catch (error) {
        manageException(error, res);
    }
});
exports.remove = remove;
