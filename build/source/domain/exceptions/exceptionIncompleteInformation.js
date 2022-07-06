"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncompleteInformationException = void 0;
class IncompleteInformationException {
    getCode() {
        return 400;
    }
    getHeaders() {
        return [];
    }
    getMessage() {
        return "incomplete information, please fill in the information correctly";
    }
}
exports.IncompleteInformationException = IncompleteInformationException;
