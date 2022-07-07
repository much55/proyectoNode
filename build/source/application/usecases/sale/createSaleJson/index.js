"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSaleJson = void 0;
let product = require("./products.json");
class CreateSaleJson {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run() {
        let sales = product;
        sales.forEach((sale) => {
            this.saleRepository.save(sale);
        });
    }
}
exports.CreateSaleJson = CreateSaleJson;
