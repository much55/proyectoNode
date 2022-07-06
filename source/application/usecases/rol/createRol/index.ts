import { Rol } from "../../../../domain/entities/rol";
import { RolRepository } from "../../../../domain/repositories/RolRepository";
 export class CreateRol{

    private rolRepository:RolRepository;
    
    
    constructor(rolRepository:RolRepository){
        this.rolRepository=rolRepository;
    }

    public run(rol:Rol):Promise<Rol[]>{
       
        return  this.rolRepository.save(rol);
      
    }

}