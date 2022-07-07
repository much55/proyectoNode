"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSaleMonth = void 0;
class ShowSaleMonth {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(month) {
        return this.saleRepository.showSalesByMonth(month);
    }
}
exports.ShowSaleMonth = ShowSaleMonth;
