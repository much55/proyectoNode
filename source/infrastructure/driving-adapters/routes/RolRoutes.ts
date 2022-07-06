
import {create} from "../service/RolRest";

const express = require('express');
export const app= express();

app.use(express.json());
app.post('/roles/',create);
exports=app


 