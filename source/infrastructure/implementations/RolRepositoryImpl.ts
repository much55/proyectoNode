
 import { Rol } from "../../domain/entities/rol";
import { RolRepository } from "../../domain/repositories/RolRepository";
import { pool } from "./Conection";
 export class RolRepositoryImpl implements RolRepository{

    async findByRol(docOrId: string): Promise<string> {
      let  response= await pool.query('SELECT roles.name FROM users inner join roles on users.roles_id=roles.id where users.id=$1 or users.document=$2',
      [docOrId,docOrId]);
       return response.rows; 
    }

    
    

    async save(rol: Rol):Promise< Rol[]> {
        const {id, name} = rol;
       let returnedRol= await pool.query('INSERT INTO roles (id, name) VALUES ($1,$2) RETURNING *',
         [id, name]);
        return returnedRol.rows;
    }
    

}
