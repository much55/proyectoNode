import { Product } from "../../../../domain/entities/product";
import { ProductRepository } from "../../../../domain/repositories/ProductRepository";
 
export class ShowProducts{

    private productRepository:ProductRepository;
    
    constructor(productRepository:ProductRepository){
        this.productRepository=productRepository;
    }

    public run():Promise<Product[]>{
        return this.productRepository.getAll();
    }

}