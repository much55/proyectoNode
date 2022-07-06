"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSaleId = void 0;
class ShowSaleId {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(id) {
        return this.saleRepository.findById(id);
    }
}
exports.ShowSaleId = ShowSaleId;
