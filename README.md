<h1 align="center"> Prueba Técnica - API REST </h1> <br>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

Este proyecto es una API desarrollada como parte de una prueba técnica, que permite gestionar usuarios, incluyendo funcionalidades como autenticación, creación y lectura de recursos. Está diseñada utilizando el framework **NestJS**, estructurada bajo una arquitectura modular que favorece la separación de responsabilidades, implementando una arquitectura en capas para organizar controladores, servicios y entidades de manera clara y eficiente.

Además, se aplican principios de diseño SOLID para asegurar un código mantenible, flexible y extensible, lo que permite facilitar la escalabilidad y la integración de nuevas funcionalidades en el futuro sin comprometer la calidad del código.

---

## Tecnologías

- **NestJS**: Framework principal para la construcción de la API.
- **TypeScript**: Lenguaje utilizado para tipado estático y mayor robustez en el código.
- **PostgreSQL**: Base de datos relacional para el almacenamiento de los datos.
- **TypeORM**: ORM para la interacción con la base de datos.
- **JWT (JSON Web Token)**: Para la autenticación y autorización.
- **Swagger**: Documentación interactiva de la API.

---

## Estructura del Proyecto

La API está organizada en módulos para mantener una arquitectura clara y escalable:

```
src/
├── auth/               # Módulo de autenticación
├── config/             # Configuración global de la aplicación y la base de datos
├── guards/             # Guards personalizados para la protección de rutas
├── user/               # Módulo de gestion de usuarios
└── main.ts             # Punto de entrada de la aplicación
```

---

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/MaxiSalguero/Back-end-Vau.git
cd Back-end-Vau
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar las variables de entorno
Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=tu_usuario
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=nombre_de_tu_base_de_datos
JWT_SECRET=tu_secreto
PORT=3000
```

### 4. Iniciar la aplicación
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

La API estará disponible en `http://localhost:3000`.

---

## Uso

### Documentación de la API
La API cuenta con documentación interactiva generada automáticamente con Swagger.  
Puedes acceder a ella en:  

`http://localhost:3000/doc`

### Endpoints principales
#### Usuarios
- `POST /auth/sign-up`: Registro de un nuevo usuario.
- `POST /auth/log-in`: Inicio de sesión y generación de un token JWT.
- `GET /user`: Listado de usuarios (requiere token).

---

## Características

- **Autenticación y autorización**:
  - Autenticación con JWT.
- **Validación de datos**:
  - Validación de entradas con **class-validator**.
- **Manejo de errores**:
  - Respuestas consistentes en caso de errores.
  - Captura de excepciones personalizadas.
- **Documentación interactiva**:
  - Generada con Swagger para facilitar pruebas y desarrollo.

---

## Créditos

Proyecto desarrollado por Maximiliano Salguero.
