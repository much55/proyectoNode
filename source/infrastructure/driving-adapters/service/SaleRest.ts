
import { SecurityRoles } from "../../../domain/services/SecurityRoles";
import { Errors } from "../../../domain/exceptions/Error";
import { Messages } from "../../../domain/services/Messages";
import { UserRepositoryImpl } from "../../implementations/UserRepositoryImpl";
import { Sale } from "../../../domain/entities/sale";
import { CreateSale } from "../../../application/usecases/sale/createSale";
import { SaleRepositoryImpl } from "../../implementations/SaleRepositoryImpl";
import { UpdateSale } from "../../../application/usecases/sale/updateSale";
import { ShowSale } from "../../../application/usecases/sale/showSales";
import { ShowSaleId } from "../../../application/usecases/sale/showSaleId";
import { DeleteSale } from "../../../application/usecases/sale/deleteSale";
import { ShowSaleDay } from "../../../application/usecases/sale/showSaleDay";
import { ShowSaleMonth } from "../../../application/usecases/sale/showSaleMonth";
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
            let createSale = new CreateSale(new SaleRepositoryImpl());
            let saleCreated= await createSale.run(req.body as Sale) ;
            res.status(200).send(saleCreated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
        
    }
    
}
export const  update= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let updateSale = new UpdateSale(new SaleRepositoryImpl());
            let saleUpdated= await updateSale.run(req.body as Sale) ;
            res.status(200).send(saleUpdated);
        }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
        
    }
    
}


export const  show= async (req,res)=>{
    try {
        
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);

        if (securityRoles.authorized) {
            let showSales = new ShowSale(new SaleRepositoryImpl());
            let list= await showSales.run();
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
    }
     
}

export const  showForId= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);
       if (securityRoles.authorized) {
            let showSaleForId = new ShowSaleId(new SaleRepositoryImpl());
            let list= await showSaleForId.run(req.params.id);
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
    }
     
}

export const  remove= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);
       if (securityRoles.authorized) {
            let deleteSale = new DeleteSale(new SaleRepositoryImpl());
            let deletedRows= await deleteSale.run(req.params.id);
            res.status(200).send("delete "+ deletedRows+ " row");
        }

        else throw new Errors("unauthorized");
         
    } catch (error) {
        manageException(error,req);
    }
     
}
export const  showForDay= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);
       if (securityRoles.authorized) {
            let showSaleForDay = new ShowSaleDay(new SaleRepositoryImpl());
            let list= await showSaleForDay.run(req.params.day);
            console.log("dia "+req.params.day);
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
    }
     
}
export const  showForMonth= async (req,res)=>{
    try {
        let securityRoles= new SecurityRoles(new UserRepositoryImpl(),"*");
        await securityRoles.run(req.headers.auth);
       if (securityRoles.authorized) {
            let showSaleForMonth = new ShowSaleMonth(new SaleRepositoryImpl());
            let list= await showSaleForMonth.run(req.params.month);
            res.status(200).send(list);
    }
        else throw new Errors("unauthorized");

    } catch (error) {
        manageException(error,res);
    }
     

    
}

 