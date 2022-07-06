"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct = void 0;
class CreateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    run(us) {
        return this.productRepository.save(us);
    }
}
exports.CreateProduct = CreateProduct;
