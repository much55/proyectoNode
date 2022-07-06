"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSale = void 0;
class DeleteSale {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(id) {
        return this.saleRepository.delete(id);
    }
}
exports.DeleteSale = DeleteSale;
