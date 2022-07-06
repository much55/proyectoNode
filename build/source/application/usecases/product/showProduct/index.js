"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowProducts = void 0;
class ShowProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    run() {
        return this.productRepository.getAll();
    }
}
exports.ShowProducts = ShowProducts;
