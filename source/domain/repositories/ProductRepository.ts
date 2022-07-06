import { Product } from "../entities/product";

export interface ProductRepository{
    getAll():Promise<Product[]>;
    save(user:Product):Promise<Product[]>;
    findById(id:string):Promise<Product>;
     


}