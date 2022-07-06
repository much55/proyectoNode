import { app } from "./source/infrastructure/driving-adapters/routes/UserRoutes";
import {  } from "./source/infrastructure/driving-adapters/routes/RolRoutes";



const port =3000;


	


app.listen(port, () => {
  console.log(`App running on port ${port}. `)
})