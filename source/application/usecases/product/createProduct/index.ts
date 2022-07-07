import { Product } from "../../../../domain/entities/product";
import { ProductRepository } from "../../../../domain/repositories/ProductRepository";
const products=require("./products.json");


export class CreateProduct{

    private productRepository:ProductRepository;
    
    constructor(productRepository:ProductRepository){
        this.productRepository=productRepository;
    }

    public run(us:Product):Promise<Product[]>{
       
       
      
        return  this.productRepository.save(us);
       
       
    }
    public saveBd(){
        let  elements:Product[]=products;
        elements.forEach ((product)=>{
                this.productRepository.findById(product.id).then((res)=>{
                    if(res[0]===undefined) this.productRepository.save(product);
                    else console.log("datos llenos");
                     
               })
              
                 
            
            
       })
    }

}