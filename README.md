## Documentación para levantar el backend

Para levantar el backend del proyecto, sigue estos pasos:

1. Asegúrate de tener Node.js y npm instalados en tu máquina.
2. Clona este repositorio en tu máquina local.
3. Navega a la carpeta del proyecto en la línea de comandos.
4. Ejecuta `npm install` para instalar las dependencias del proyecto.
5. Ejecuta `npm start` para iniciar la aplicación.

El script `start` en el archivo [`Back/package.json`](command:_github.copilot.openRelativePath?%5B%22Back%2Fpackage.json%22%5D "Back/package.json") utiliza nodemon para iniciar la aplicación, lo que significa que la aplicación se reiniciará automáticamente cada vez que se realicen cambios en los archivos del código fuente.

## Documentación para levantar el frontend

Para levantar el frontend del proyecto, sigue estos pasos:

1. Asegúrate de tener Node.js y npm instalados en tu máquina.
2. Clona este repositorio en tu máquina local.
3. Navega a la carpeta del proyecto en la línea de comandos.
4. Ejecuta `npm install` para instalar las dependencias del proyecto.
5. Ejecuta `ng serve -o` para iniciar el servidor de desarrollo.

El script `start` en el archivo [`frontAngular/package.json`](command:_github.copilot.openRelativePath?%5B%22frontAngular%2Fpackage.json%22%5D "frontAngular/package.json") utiliza Angular CLI para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/` en tu navegador para ver la aplicación. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

## Sugerencia en caso de problemas al descargar las dependencias

Si encuentras problemas al descargar las dependencias, puedes intentar desactivar la configuración de SSL estricta de npm. Esto puede ser útil si estás detrás de un firewall corporativo que intercepta solicitudes SSL. Ejecuta el siguiente comando en la línea de comandos:

```sh
npm config set strict-ssl false
```
