# Bienvenido al Desafio sobre JavaScript de DEV.F.

¡Por favor lee con atención!

Hay cosas puntuales que tal vez no vimos específicamente en el material de las clases, vas a tener que investigar un poquito por tu cuenta (el buscador de Google es muy útil en estos casos).

### 1. FORKEAR REPOSITORIO EN TU CUENTA

Primero debes forkear este repo, haciendo click en el botón `fork` de arriba a la derecha en la plataforma de Git Hub.

Una vez que tengas una copia de este repo en tu cuenta de `github`, cloná el repo dentro de tu pc(debes clonarlo desde TU PROPIA cuenta de GitHub.). Una vez clonado entrá a esa carpeta y ejecutá los siguientes comandos desde la consola bash:

    npm install
    npm test

> En un principio todos los test estarán en rojo, es tu tarea solucionarlos y que pasen a ser correctos.

### 2. RESOLVER EL CHALLENGE

Tu tarea es completar el código en `desafio.js` de tal forma que pasen la mayoría de los tests.
NO DEBES TOCAR OTRO ARCHIVO QUE NO SEA "desafio.js"

### 3. ENTREGA

Correr por ultima vez los tests y verificar cuantos pasan. Ten en cuenta que si te aparece "1 failed;1 total" es porque tienes un error de sintaxis: seguramente falta o sobra una llave, paréntesis, punto y coma, etc.

Saca un print de pantalla de tus tests.( Envia a tus senseis la captura de pantalla con el resultado de los test via slack.)

Luego, debes subir un commit a tu repo. Para hacerlo, debes ejecutar el siguiente comando:

    git add .
    git commit -m 'desafio superado commit'
    git push origin main

Una vez finalizado, chequea que veas los cambios reflejados en el repo de tu cuenta de github (entrando a tu repo desde el browser.)

### GUIA DE ERRORES COMUNES

Para identificar el error, vas a tener que leerlo en la consola.

- "jest" no se reconoce como un comando externo o interno...:

  1. Borrar la carpeta `node_modules` y el archivo `package-lock.json` e instalar nuevamente ( `npm install` ).
  2. Si esto no funciona, instalar test con el comando `npm install jest`.

- 1 failed, 1 total:

  1. Tenes un error de sintaxis. Revisa el último ejercicio que hayas hecho, seguramente falta o sobra una llave, paréntesis, punto y coma, etc.

- Author identity unknown.

  1. Intenta ejecutar los siguientes comandos para configurar tu cuenta:

     - git config --global user.name "Tu usuario de GitHub aca"
     - git config --global user.email "Tu email aca"

  2. Ingresa a [Github](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) y sigue las instrucciones para configurar tu token.

- La consola se tilda en `Runs`:
  1. Revisa tu código, tenes un bucle infinito. Tenes que checkear la condición de corte de tus bucles.
