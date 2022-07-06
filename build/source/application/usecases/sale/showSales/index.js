"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSale = void 0;
class ShowSale {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run() {
        return this.saleRepository.getAll();
    }
}
exports.ShowSale = ShowSale;
