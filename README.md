
API REST de GuitarsLA, desarrollada con Node.js, Express, TypeScript y Sequelize. Permite gestionar la información de las guitarras y comunicarse con una base de datos PostgreSQL.

## Tecnologías utilizadas

- Node.js
    
- Express
    
- TypeScript
    
- Sequelize
    
- sequelize-typescript
    
- PostgreSQL
    
- express-validator

## Requisitos previos

- Node.js
    
- npm
    
- PostgreSQL

## Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Entrar a la carpeta del proyecto:

```bash
cd NOMBRE_DE_LA_CARPETA
```

3. Instalar las dependencias:

```bash
npm install
```

## Configuración de la base de datos

Antes de iniciar el servidor, es necesario contar con una base de datos PostgreSQL creada y en ejecución.

Crear un archivo `.env` en la raíz del proyecto, al mismo nivel que `package.json`.

Agregar las siguientes variables:

```env
DATABASE_URL=postgres://USUARIO:CONTRASEÑA@HOST/NOMBRE_BASE_DATOS?ssl=true
PORT=4000
```

Reemplazar los valores de `DATABASE_URL` con las credenciales y el nombre de la base de datos correspondientes.

- `DATABASE_URL`: cadena de conexión a PostgreSQL.
    
- `PORT`: puerto en el que se ejecutará el servidor Express.

## Ejecutar el servidor

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor se ejecutará en el puerto configurado en `PORT`.

Por defecto:

```text
http://localhost:4000
```

La API utiliza el prefijo:

```text
http://localhost:4000/api
```

## Poblar la base de datos

El proyecto incluye un script para insertar los datos iniciales de las guitarras.

Para ejecutarlo:

```bash
npm run seed
```

Este comando ejecuta el archivo `src/seed.ts`.

## Scripts disponibles

|Comando|Descripción|
|---|---|
|`npm install`|Instala las dependencias|
|`npm run dev`|Inicia el servidor de desarrollo|
|`npm run seed`|Inserta los datos iniciales|

## Conexión con el frontend

El frontend consume los endpoints de esta API mediante peticiones HTTP.

La dirección base utilizada por el frontend es:

```text
http://localhost:4000/api
```
