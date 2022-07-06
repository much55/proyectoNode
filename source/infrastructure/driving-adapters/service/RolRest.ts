import { CreateRol } from "../../../application/usecases/rol/createRol";
import { Rol } from "../../../domain/entities/rol";
import { Errors } from "../../../domain/exceptions/Error";
import { Messages } from "../../../domain/services/Messages";
import { SecurityRoles } from "../../../domain/services/SecurityRoles";
import { RolRepositoryImpl } from "../../implementations/RolRepositoryImpl";
import { UserRepositoryImpl } from "../../implementations/UserRepositoryImpl";

const express = require('express');
export const app= express();



export const  create= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
         await securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let createRol = new CreateRol(new RolRepositoryImpl());
            let rolCreated= await createRol.run(req.body as Rol) ;
            res.status(200).send(rolCreated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
             error.code===undefined || null?error.code='':error.code
            let  message= new Messages(error.code.toString());
            res.status(message.exception.getCode()).send(message.exception.getMessage());
        
    }
    
}




     


 