###ERRORES QUE PUEDEN APARECERTE



- "jest" no se reconoce como un comando externo o interno...:

  1. Borrar la carpeta `node_modules` y el archivo `package-lock.json` e instalar nuevamente ejecutando el comando ( `npm install` ).
  2. Si esto no funciona, instalar test con el comando `npm install jest`.
-------------

- 1 failed, 1 total:

  1. Tenes un error de sintaxis. Revisa el último ejercicio que hayas hecho, seguramente falta o sobra una llave, paréntesis, punto y coma, etc.
---------------

- Author identity unknown.

  1. Intenta ejecutar los siguientes comandos para configurar tu cuenta:

     - git config --global user.name "Tu usuario de GitHub aca"
     - git config --global user.email "Tu email aca"

  2. Ingresa a [Github](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) y sigue las instrucciones para configurar tu token.

-----------------------
- La consola se tilda en `Runs`:
  1. Revisa tu código, tienes un bucle infinito seguramente!.
