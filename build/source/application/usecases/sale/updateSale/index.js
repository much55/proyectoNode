"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSale = void 0;
class UpdateSale {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(us) {
        return this.saleRepository.update(us);
    }
}
exports.UpdateSale = UpdateSale;
