# Bienvenido al Desafio sobre JavaScript.

¡Por favor lee con atención todo y si tienes alguna duda, charlarlo con tu sensei!

Hay cosas puntuales que tal vez no vimos específicamente en el material de las clases.
Vas a tener que investigar un poquito por tu cuenta (el buscador de Google es muy útil en estos casos).
Tambien recuerda que tienes recursos como:
- https://developer.mozilla.org/es/
- https://www.w3schools.com/


Debes tener instalado estos programas, te dejo al lado el link de descarga por si no los tienes!

-Code Visual Studio ( https://code.visualstudio.com/download )
-Node.js  ( https://nodejs.org/es/download )
-Consola de Git (bash) ( https://git-scm.com/downloads )  

En el modulo de intro a la web tienes el tutorial de instalación por si tienes alguna duda al momento de descargar o instalar.



### Ahora que tienes todo preparado comenzemos:
### 1. FORKEAR REPOSITORIO EN TU CUENTA

Primero debes forkear este repo, haciendo click en el botón `fork` de arriba a la derecha en la plataforma de Git Hub.
  
Una vez que tengas una copia de este repo en tu cuenta de `github`, cloná el repo dentro de tu pc(debes clonarlo desde TU PROPIA cuenta de GitHub). 

Una vez clonado abre la carpeta en tu Code Visual Studio, y abriendo la terminal integrada (de git bash) ingresa primero este comando:

    npm install

Luego que se te instalen los paquetes, corre el siguiente comando

    npm test

> En un principio todos los test estarán en rojo, es tu tarea solucionarlos y que pasen a ser correctos.
> Los test se dividen en niveles, por lo que te recomendamos correr los siguientes comandos de acuerdo al nivel en el que estes:


    npm test level1
        ó
    npm test level2
        ó
    npm test level3



### 2. RESOLVER EL CHALLENGE

Tu tarea es completar el código en `desafio.js` de tal forma que pasen la mayoría de los tests.
NO DEBES TOCAR OTRO ARCHIVO QUE NO SEA "desafio.js"

Son un total de 39 test a pasar, intenta pasar como mínimo el 60% de los tests!

Ten en cuenta que si te aparece "1 failed;1 total" es porque tienes un error de sintaxis: seguramente falta o sobra una llave, paréntesis, punto y coma, etc.



### 3. ENTREGA

Correr por ultima vez los tests con el comando npm test y verificar cuantos pasan. (no pongas level en el comando ya que debes correr todos los tests en conjunto para sacar captura del total)


Saca un print de pantalla de tus tests.( Envia a tus senseis la captura de pantalla con el resultado de los test via slack.)

Luego, debes subir un commit a tu repositorio y actualizarlo. Para hacerlo, debes ejecutar:

    git add .
    git commit -m 'desafio realizado'
    git push origin main


