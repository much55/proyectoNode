"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const exceptionDuplicateForeignKey_1 = require("../exceptions/exceptionDuplicateForeignKey");
const exceptionDuplicateInformation_1 = require("../exceptions/exceptionDuplicateInformation");
const exceptionGeneral_1 = require("../exceptions/exceptionGeneral");
const exceptionIncompleteInformation_1 = require("../exceptions/exceptionIncompleteInformation");
const ExceptionUnauthorized_1 = require("../exceptions/ExceptionUnauthorized");
class Messages {
    constructor(ncode) {
        switch (ncode) {
            case "23502":
                this.exception = new exceptionIncompleteInformation_1.IncompleteInformationException();
                break;
            case "23505":
                this.exception = new exceptionDuplicateInformation_1.DuplicateInformationException();
                break;
            case "23503":
                this.exception = new exceptionDuplicateForeignKey_1.DuplicateIForeignException();
                break;
            case "unauthorized":
                this.exception = new ExceptionUnauthorized_1.UnauthorizedException();
                break;
            default:
                this.exception = new exceptionGeneral_1.GeneralException();
                console.log("entro a defaulttt el codigo es " + ncode);
                //      this.exception= new Exception1();
                break;
        }
    }
}
exports.Messages = Messages;
