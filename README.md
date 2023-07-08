<p class="has-line-data" data-line-start="0" data-line-end="24">##RESTfull API con PostgreSQL<br>
##Trabajo Universidad Hispanoamericana<br>
###INTRODUCCION<br>
Esta apliacion es un CRUD que permite el registro de ususarios, la base de datos es una base pequeña que consta de dos tablas relacionadas, una llamada Personas y otra llamada usuarios, como es una base de datos de un taller se creo la tabla personas para regristrar los datos de todas las personas, en ese tabla hay un campo que se llama tipo persona, si el campo el falso quiere decir que esa informacion corresponde a un cliente y si el campo es verdadero significa que es un usuario del sistema, por lo que se registran datos adiconales en la tabla usuarios como lo es userid, contraseña y estado del usuariom que podria ser habilitado, deshabilitada. Ejemplo tabla Personas<br>
idpersona | nombre | apellido1 | apellido2 | telefono | cedula | direccion | tipopersona | estado -----------±----------±----------±----------±---------±-----------±----------±------------±-------<br>
1 | Alexander | Cascante | Corrales | 99995588 | 811553665 | Alajuela | t | t<br>
2 | Jose | Morales | Mora | 88888888 | 345889663 | San Jose | t | t<br>
3 | Marcos | Mena | Rojas | 54556999 | 185993665 | Heredia | t | t<br>
4 | Dinora | Obando | Garcia | 65472568 | 154883669 | Alajuela | f | t<br>
5 | Marta | Recio | Quesada | 14879632 | 865448996 | Heredia | f | t<br>
Ejemplo tabla Usuarios<br>
idusuario | idpersona | userid | password | estado -----------±----------±----------±----------±-------<br>
1 | 1 | acascante | HolaMundo | t<br>
2 | 2 | jmorales | 1234 | t<br>
3 | 3 | mmena | Mena123 | t<br>
Como es una prueba los valores de las contraseñas no estan cifrados, ento en un entorno de produccion deben de estarlo PASOS ##PARA LA INSTALACION DE LA BASE DE DATOS POSTGRESS EN AMBIENTE LINUX<br>
1- sudo apt update<br>
2- sudo apt install postgresql postgresql-contrib<br>
3- psql --version<br>
Luego de verificar que la version esta bien, hay que iniciar los sercios como root<br>
VER ESTADO -&gt; sudo service postgresql status<br>
INICIAR -&gt; sudo service postgresql start<br>
DETENER -&gt; sudo service postgresql stop<br>
Una vez iniciada la base de datos ejecutar el siguiente comando para configurar las contraseñas sudo passwd postgres La linea de comando te va a preguntar por un password, ingresa el password deseado y anotalo en un luguar seguro Para ingresar a la base de datos ejecutar el comando sudo -u postgres psql una vez en la linea de comandos, ejecutar el script de este proyecto para la creacion de la base de datos, las tablas e ingreso de informacion</p>
<p class="has-line-data" data-line-start="25" data-line-end="30">PASOS PARA LA EJECICION DEL SISTEMA //ESTOS PASOS SON PARA LA EJECION DEL API en Visual studio code<br>
1- instarlar los modulos usando la linea de comandos de VSCode:<br>
npm i express pg<br>
Este comando instalara el modulo express y pg es para permitir conecciones a postgresql.<br>
Ya con esto solo ejecuta el comando node /src/index.js Esto lo que hara es poner a correr la apliacion en el puerto 4000</p>
<p class="has-line-data" data-line-start="31" data-line-end="32">Ya con esto puedes usar la apliacion INSOMIA para enviar POST,GET,PUT y DEL Esto debido a que no se desarollo un frontend para este ejercicio. El link para hacer las peticiones es <a href="http://localhost:4000/users">http://localhost:4000/users</a></p>
