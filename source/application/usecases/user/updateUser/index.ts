import { User } from "../../../../domain/entities/User";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 
export class UpdateUser{

    private userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this.userRepository=userRepository;
    }

    public run(us:User):Promise<User[]>{
       return  this.userRepository.update(us);
    }

}