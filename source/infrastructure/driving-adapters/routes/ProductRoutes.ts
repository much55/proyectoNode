
import {create,show} from "../service/ProductRest";

const express = require('express');
export const appP= express();

appP.use(express.json());
appP.post('/products/',create);
appP.get('/products/',show);
exports=appP


 