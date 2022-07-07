# proyectoNode
proyecto de prueba tecnica
instrucciones:

1 adentro del repositorio encontrara el archivo sql que contiene toda la bd,tanto las sentencias ddl como las dml,podra exportarla facilmente

2 para conectarse a la base de datos,se siguen las configuraciones basicas para no complicar el ejercicio:

usuario:postgres

clave:12345

bd:shop

puerto:5432


3 para correr el proyecto solo basta tener la ruta del proyecto en su consola y encender el servidor de node
esto se hace con la instruccion "npm start",se activara el puerto 3000 en el localhost,para iniciar con cualquier consumo de servicio solo necesita la url del servidor,el puerto y el servicio que va a consumir,ejemplo: localhost:3000/users

4 las peticiones siguen la misma ruta,lo que varia es el metodo de la peticion,las puede encontrar como 

url:users
acciones:

mostrar todos-------- localhost:3000/users-------GET

mostrar uno-------- localhost:3000/users/:id-------GET

registrar-------- localhost:3000/users-------POST

actualizar-------- localhost:3000/users-------PUT

eliminar-------- localhost:3000/users/:id-------DELETE

5:para los modulos que requieran permisos de administrador es neceseario autentificarse en los headers con el atributo de auth

auth=id del usuario





