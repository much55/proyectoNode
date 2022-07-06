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
exports.SaleRepositoryImpl = void 0;
const Conection_1 = require("./Conection");
class SaleRepositoryImpl {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield Conection_1.pool.query('SELECT * FROM sales');
            return response.rows;
        });
    }
    save(sale) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, quantity, sale_at, product_id, user_id } = sale;
            let returnedUser = yield Conection_1.pool.query('INSERT INTO sales (id, quantity,sale_at,product_id,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *', [id, quantity, sale_at, product_id, user_id]);
            return returnedUser.rows;
        });
    }
    update(sale) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, quantity, sale_at } = sale;
            let returnedUser = yield Conection_1.pool.query('update sales set quantity=$2,sale_at=$3 where id=$1 RETURNING *', [id, quantity, sale_at]);
            return returnedUser.rows;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let deletedRows = yield Conection_1.pool.query('DELETE FROM sales WHERE id = $1', [id]);
            return deletedRows.rowCount;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield Conection_1.pool.query('SELECT * FROM sales where id=$1', [id]);
            return response.rows;
        });
    }
}
exports.SaleRepositoryImpl = SaleRepositoryImpl;
