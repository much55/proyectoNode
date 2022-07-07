"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct = void 0;
const products = require("./products.json");
class CreateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    run(us) {
        return this.productRepository.save(us);
    }
    saveBd() {
        let elements = products;
        elements.forEach((product) => {
            this.productRepository.findById(product.id).then((res) => {
                if (res[0] === undefined)
                    this.productRepository.save(product);
                else
                    console.log("datos llenos");
            });
        });
    }
}
exports.CreateProduct = CreateProduct;
