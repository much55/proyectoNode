import { Product } from "../../../domain/entities/product";
import { CreateProduct } from "../../../application/usecases/product/createProduct"
import { ShowProducts } from "../../../application/usecases/product/showProduct";
import { SecurityRoles } from "../../../domain/services/SecurityRoles";
import { Errors } from "../../../domain/exceptions/Error";
import { Messages } from "../../../domain/services/Messages";
import { ProductRepositoryImpl } from "../../implementations/ProductRepositoryImpl";
import { UserRepositoryImpl } from "../../implementations/UserRepositoryImpl";
 const express = require('express');
export const app= express();


const manageException=(error,res)=>{
    error.code===undefined || null?error.code='':error.code
    let  message= new Messages(error.code.toString());
    res.status(message.exception.getCode()).send(message.exception.getMessage());
}

export const  create= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);
         
        if (securityRoles.authorized) {
            let createproduct = new CreateProduct(new ProductRepositoryImpl());
            let productCreated= await createproduct.run(req.body as Product) ;
            res.status(200).send(productCreated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
        
    }
    
}


export const  show= async (req,res)=>{
    try {
        
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"'");
        await securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let showProducts = new ShowProducts(new ProductRepositoryImpl());
            let list= await showProducts.run();
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
    }
     
}

export const insertBd=()=>{
    let createproduct = new CreateProduct(new ProductRepositoryImpl());
    createproduct.saveBd();

}

 



 