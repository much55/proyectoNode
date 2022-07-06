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
exports.SecurityRoles = void 0;
class SecurityRoles {
    constructor(userRepository, level) {
        this.userRepository = userRepository;
        this.levelSecurity = level;
    }
    get authorized() {
        return this._authorized;
    }
    set authorized(value) {
        this._authorized = value;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.levelSecurity === "'") {
                this.authorized = true;
            }
            else {
                this.rol = yield this.userRepository.findByRol(id);
                this.authorized = this.verifyLevel();
            }
        });
    }
    verifyLevel() {
        switch (this.levelSecurity) {
            case "*":
                this.rol === "admin" ? true : false;
                break;
            case "+":
                this.rol === "employee" ? true : false;
                break;
            default:
                return false;
                break;
        }
    }
}
exports.SecurityRoles = SecurityRoles;
