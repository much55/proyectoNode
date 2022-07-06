import { Product } from "../../../../domain/entities/product";
import { ProductRepository } from "../../../../domain/repositories/ProductRepository";


export class CreateProduct{

    private productRepository:ProductRepository;
    
    constructor(productRepository:ProductRepository){
        this.productRepository=productRepository;
    }

    public run(us:Product):Promise<Product[]>{
       
       
      
        return  this.productRepository.save(us);
       
       
    }

}