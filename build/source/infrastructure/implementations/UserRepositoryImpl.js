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
exports.UserRepositoryImpl = void 0;
const Conection_1 = require("./Conection");
class UserRepositoryImpl {
    findByRol(docOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Conection_1.pool.query('SELECT roles.name FROM users inner join roles on users.roles_id=roles.id where users.id=$1 or users.document=$2', [docOrId, docOrId]);
                return response.rows;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield Conection_1.pool.query('SELECT * FROM users');
            return response.rows;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, document, last_name, name, roles_id } = user;
            let returnedUser = yield Conection_1.pool.query('INSERT INTO users (id, document,last_name,name,roles_id) VALUES ($1,$2,$3,$4,$5) RETURNING *', [id, document, last_name, name, roles_id]);
            return returnedUser.rows;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, document, last_name, name } = user;
            let returnedUser = yield Conection_1.pool.query('update users set document=$1,last_name=$2,name=$3 where id=$4 RETURNING *', [document, last_name, name, id]);
            return returnedUser.rows;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let deletedRows = yield Conection_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
            return deletedRows.rowCount;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield Conection_1.pool.query('SELECT * FROM users where id=$1', [id]);
            return response.rows;
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
