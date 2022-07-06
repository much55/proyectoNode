
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { pool } from "./Conection";
 export class UserRepositoryImpl implements UserRepository{

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

    
    async  getAll():Promise<User[]> {
       let  response= await pool.query('SELECT * FROM users');
       return response.rows; 
    }

    async save(user: User):Promise< User[]> {
        const {id, document,last_name,name,roles_id } = user;
       let returnedUser= await pool.query('INSERT INTO users (id, document,last_name,name,roles_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
         [id, document,last_name,name,roles_id]);
        return returnedUser.rows;
    }

    async update(user: User):Promise< User[]> {
        const {id,document,last_name,name,roles_id } = user;
      let returnedUser= await pool.query('update users set document=$1,last_name=$2,name=$3,roles_id=$4 where id=$5 RETURNING *',
        [document,last_name,name,roles_id,id]);
        return returnedUser.rows;
    }

    async delete(id: string):Promise<string> {
      let deletedRows=  await pool.query('DELETE FROM users WHERE id = $1', [id]);
      return deletedRows.rowCount;
        
    }

    async findById(id: string):Promise<User> {
      let  response= await pool.query('SELECT * FROM users where id=$1', [id]);
      return response.rows; 
    }

}
