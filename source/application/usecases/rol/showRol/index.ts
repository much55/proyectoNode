import { RolRepository } from "../../../../domain/repositories/RolRepository";

 
export class ShowUserForId{

    private rolRepository:RolRepository;
    
    constructor(rolRepository:RolRepository){
        this.rolRepository=rolRepository;
    }

    public run(id:string):Promise<String>{
        return this.rolRepository.findByRol(id);
    }

}