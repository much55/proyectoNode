"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateInformationException = void 0;
class DuplicateInformationException {
    getCode() {
        return 400;
    }
    getHeaders() {
        return [];
    }
    getMessage() {
        return "duplicate key violates the restriction, please enter another primary key that is unique";
    }
}
exports.DuplicateInformationException = DuplicateInformationException;
