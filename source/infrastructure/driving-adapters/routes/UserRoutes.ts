
import {showForId,show,create,update,remove } from "../service/UserRest";

const express = require('express');
export const app= express();

app.use(express.json());
app.get('/users/:id',showForId);
app.get('/users',show);
app.post('/users/',create);
app.put('/users/',update);
app.delete('/users/:id',remove);

 