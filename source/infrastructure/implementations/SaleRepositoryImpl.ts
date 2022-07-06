
import { Sale } from "../../domain/entities/sale";
import { SaleRepository } from "../../domain/repositories/SaleRepository";
import { pool } from "./Conection";
 export class SaleRepositoryImpl implements SaleRepository{

    

    
    async  getAll():Promise<Sale[]> {
       let  response= await pool.query('SELECT * FROM sales');
       return response.rows; 
    }

    async save(sale: Sale):Promise< Sale[]> {
        const {id, quantity,sale_at,product_id,user_id } = sale;
       let returnedUser= await pool.query('INSERT INTO sales (id, quantity,sale_at,product_id,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
         [id, quantity,sale_at,product_id,user_id]);
        return returnedUser.rows;
    }

    async update(sale: Sale):Promise< Sale[]> {
      const {id, quantity,sale_at } = sale;
      let returnedUser= await pool.query('update sales set quantity=$2,sale_at=$3 where id=$1 RETURNING *',
      [id, quantity,sale_at]);
        return returnedUser.rows;
    }

    async delete(id: string):Promise<string> {
      let deletedRows=  await pool.query('DELETE FROM sales WHERE id = $1', [id]);
      return deletedRows.rowCount;
        
    }

    async findById(id: string):Promise<Sale> {
      let  response= await pool.query('SELECT * FROM sales where id=$1', [id]);
      return response.rows; 
    }

}
