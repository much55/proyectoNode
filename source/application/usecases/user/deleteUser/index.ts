import { User } from "../../../../domain/entities/User";
import { UserRepository } from "../../../../domain/repositories/UserRepository";


export class DeleteUser{

    private userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this.userRepository=userRepository;
    }

    public run(id:string):Promise<string>{
         return this.userRepository.delete(id);
    }

}