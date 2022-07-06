import { User } from "../../../../domain/entities/User";
import { Errors } from "../../../../domain/exceptions/Error";
import { UserRepository } from "../../../../domain/repositories/UserRepository";
 import { Messages } from "../../../../domain/services/Messages";
import { SecurityRoles } from "../../../../domain/services/SecurityRoles";

export class CreateUser{

    private userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this.userRepository=userRepository;
    }

    public run(us:User):Promise<User[]>{
       
       
      
        return  this.userRepository.save(us);
       
       
    }

}