
import {showForId,show,create,update,remove } from "../service/SaleRest";

const express = require('express');
export const appSales= express();

appSales.use(express.json());
appSales.get('/sales/:id',showForId);
appSales.get('/sales',show);
appSales.post('/sales/',create);
appSales.put('/sales/',update);
appSales.delete('/sales/:id',remove);

 exports=appSales;