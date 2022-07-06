import { User } from "../entities/User";

export interface UserRepository{
    getAll():Promise<User[]>;
    save(user:User):Promise<User[]>;
    delete(id:string):Promise<string>;
    findById(id:string):Promise<User>;
    findByRol(docOrId:string):Promise<string>;
    update(user:User):Promise<User[]>;


}