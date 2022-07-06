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
exports.ProductRepositoryImpl = void 0;
const Conection_1 = require("./Conection");
class ProductRepositoryImpl {
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
            let response = yield Conection_1.pool.query('SELECT * FROM products');
            return response.rows;
        });
    }
    save(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description, name, price } = product;
            let returnedProduct = yield Conection_1.pool.query('INSERT INTO products (id, description,name,price) VALUES ($1,$2,$3,$4) RETURNING *', [id, description, name, price]);
            return returnedProduct.rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield Conection_1.pool.query('SELECT * FROM products where id=$1', [id]);
            return response.rows;
        });
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;
