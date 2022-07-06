"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateIForeignException = void 0;
class DuplicateIForeignException {
    getCode() {
        return 400;
    }
    getHeaders() {
        return [];
    }
    getMessage() {
        return "error in registration or update, violates the foreign key. please enter a valid foreign key";
    }
}
exports.DuplicateIForeignException = DuplicateIForeignException;
