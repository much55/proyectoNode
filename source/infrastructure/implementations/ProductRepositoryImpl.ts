
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { pool } from "./Conection";
 export class ProductRepositoryImpl implements ProductRepository{

    async findByRol(docOrId: string): Promise<string> {
      try {
        let  response= await pool.query('SELECT roles.name FROM users inner join roles on users.roles_id=roles.id where users.id=$1 or users.document=$2',
        [docOrId,docOrId]);
        return response.rows; 
      } 
      catch (error) {
        console.log(error);
        return null;
      }
    }

    
    async  getAll():Promise<Product[]> {
       let  response= await pool.query('SELECT * FROM products');
       return response.rows; 
    }

    async save(product: Product):Promise< Product[]> {
        const {id, description,name,price } = product;
       let returnedProduct= await pool.query('INSERT INTO products (id, description,name,price) VALUES ($1,$2,$3,$4) RETURNING *',
         [id, description,name,price]);
        return returnedProduct.rows;
    }

    async findById(id: string):Promise<Product> {
      let  response= await pool.query('SELECT * FROM products where id=$1', [id]);
      return response.rows; 
    }

}
