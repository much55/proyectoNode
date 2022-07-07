"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSaleDay = void 0;
class ShowSaleDay {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    run(day) {
        return this.saleRepository.showSalesByDay(day);
    }
}
exports.ShowSaleDay = ShowSaleDay;
