import { app } from "./source/infrastructure/driving-adapters/routes/UserRoutes";
import { app as appRoles } from "./source/infrastructure/driving-adapters/routes/RolRoutes";
import { appP as appProducts } from "./source/infrastructure/driving-adapters/routes/ProductRoutes";
import { appSales } from "./source/infrastructure/driving-adapters/routes/SalesRoutes";



const port =3000;
app.use(appSales);
app.use(appRoles);
app.use(appProducts);
	


app.listen(port, () => {
  console.log(`App running on port ${port}. `)
})