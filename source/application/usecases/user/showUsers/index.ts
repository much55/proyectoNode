import { User } from "../../../../domain/entities/User";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 
export class ShowUsers{

    private userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this.userRepository=userRepository;
    }

    public run():Promise<User[]>{
        return this.userRepository.getAll();
    }

}