"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralException = void 0;
class GeneralException {
    getCode() {
        return 400;
    }
    getHeaders() {
        return [];
    }
    getMessage() {
        return "error, possibly the data passed to the request is misspelled, make sure and try again";
    }
}
exports.GeneralException = GeneralException;
