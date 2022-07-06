"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
class UnauthorizedException {
    getCode() {
        return 401;
    }
    getHeaders() {
        return [];
    }
    getMessage() {
        return "unauthorized, please validate correctly";
    }
}
exports.UnauthorizedException = UnauthorizedException;
