"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSale = void 0;
class CreateSale {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(us) {
        return this.saleRepository.save(us);
    }
}
exports.CreateSale = CreateSale;
