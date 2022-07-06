import { app } from "./source/infrastructure/driving-adapters/routes/UserRoutes";



const port =3000;


	


app.listen(port, () => {
  console.log(`App running on port ${port}. `)
})