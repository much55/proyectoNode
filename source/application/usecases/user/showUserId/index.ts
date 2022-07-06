import { User } from "../../../../domain/entities/User";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 
export class ShowUserForId{

    private userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this.userRepository=userRepository;
    }

    public run(id:string):Promise<User>{
        return this.userRepository.findById(id);
    }

}