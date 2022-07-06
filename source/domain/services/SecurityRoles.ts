import { User } from "../entities/User";
import { Errors } from "../exceptions/Error";
import { UserRepository } from "../repositories/UserRepository";

export class SecurityRoles{

    private rol:string;
    private levelSecurity:string;
    private userRepository:UserRepository;
    private _authorized: boolean;

    public get authorized(): boolean {
        return this._authorized;
    }
    public set authorized(value: boolean) {
        this._authorized = value;
    }
    
    constructor(userRepository:UserRepository,level:string){
        this.userRepository=userRepository;
        this.levelSecurity=level;
    }

    public async run(id:string){
        
            if (this.levelSecurity==="'") {
                this.authorized=true; 
            }
            else{
                this.rol=  await this.userRepository.findByRol(id);
                this.authorized= this.verifyLevel();
            }
    }
    private verifyLevel():boolean{
        switch (this.levelSecurity) {
            case "*":
                this.rol==="admin"?  true:false;    
            break;

            case "+":
                this.rol==="employee"?  true:false;    
            break;
        
            default:
                return false;
                break;
        }
        
        
    }

}