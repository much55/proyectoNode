import { Rol } from "../entities/rol";

export interface RolRepository{
    
    save(user:Rol):Promise<Rol[]>;
    findByRol(docOrId:string):Promise<string>;
    


}