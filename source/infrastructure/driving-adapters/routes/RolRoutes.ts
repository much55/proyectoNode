
import {create} from "../service/RolRest";

const express = require('express');
export const appRol= express();

appRol.use(express.json());
appRol.post('/roles/',create);


 