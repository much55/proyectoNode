import { User } from "../../../domain/entities/User";
import { CreateUser } from "../../../application/usecases/user/createUser";
import { ShowUsers } from "../../../application/usecases/user/showUsers";
import { SecurityRoles } from "../../../domain/services/SecurityRoles";
import { Errors } from "../../../domain/exceptions/Error";
import { Messages } from "../../../domain/services/Messages";
import { UpdateUser } from "../../../application/usecases/user/updateUser";
import { ShowUserForId } from "../../../application/usecases/user/showUserId";
import { DeleteUser } from "../../../application/usecases/user/deleteUser";
import { UserRepositoryImpl } from "../../implementations/UserRepositoryImpl";
const express = require('express');
export const app= express();



export const  create= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let createUser = new CreateUser(new UserRepositoryImpl());
            let usersCreated= await createUser.run(req.body as User) ;
            res.status(200).send(usersCreated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
            let  message= new Messages(error.code.toString());
            res.status(message.exception.getCode()).send(message.exception.getMessage());
        
    }
    
}
export const  update= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let updateUser = new UpdateUser(new UserRepositoryImpl());
            let usersupdated= await updateUser.run(req.body as User) ;
            res.status(200).send(usersupdated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
        let  message= new Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
        
    }
    
}


export const  show= async (req,res)=>{
    try {
        
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"'");
        securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let showUsers = new ShowUsers(new UserRepositoryImpl());
            let list= await showUsers.run();
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        let  message= new Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
     
}

export const  showForId= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        securityRoles.run(req.headers.auth);

       if (securityRoles.authorized) {
            let showUserForId = new ShowUserForId(new UserRepositoryImpl());
            let list= await showUserForId.run(req.params.id);
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        let  message= new Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
     
}

export const  remove= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        securityRoles.run(req.headers.auth);
       if (securityRoles.authorized) {
            let deleteUser = new DeleteUser(new UserRepositoryImpl());
            let deletedRows= await deleteUser.run(req.params.id);
            res.status(200).send("delete "+ deletedRows+ " row");
        }

        else throw new Errors("unauthorized");
         
    } catch (error) {
        let  message= new Messages(error.code.toString());
        res.status(message.exception.getCode()).send(message.exception.getMessage());
    }
     
}

 