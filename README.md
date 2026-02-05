# 🚀 API - Gestor de Tareas Seguro

Backend para una aplicación de gestión de tareas con autenticación de usuarios. Permite registrarse, iniciar sesión y gestionar tareas privadas (CRUD) protegidas con JWT.

## 🛠️ Tecnologías Utilizadas

* **Node.js** (Entorno de ejecución)
* **Express** (Framework web)
* **MongoDB Atlas & Mongoose** (Base de datos)
* **JWT (JSON Web Tokens)** (Autenticación)
* **Bcrypt** (Encriptación de contraseñas)

---

## ⚙️ Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/fabricaricato/tp-utn-servidor-http-fabrizio-caricato.git
    cd tp-utn-servidor-http-fabrizio-caricato
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Este proyecto utiliza variables de entorno para la seguridad.
    
    * Busca el archivo `.env.example` que ya está en el proyecto.
    * Crea una copia de ese archivo y renómbralo a `.env`.
    * Abre el nuevo archivo `.env` y completa los valores con tus propios datos:
    
    ```env
    URI_DB = tu_string_de_conexion_real_de_mongodb
    PORT = 50000
    JWT_SECRET = tu_palabra_secreta_personal
    JWT_EXPIRES = tiempo_de_expiración_del_token
    ```

4.  **Ejecutar el servidor:**
    ```bash
    # Ejecutar servidor
    npm run dev

---

## 📡 Ejemplos de Requests (Endpoints)

Puedes probar la API usando **Bruno**, **Postman** o **Thunder Client**.

### 🔐 Autenticación

#### 1. Registrar Usuario
* **Método:** `POST`
* **URL:** `/api/auth/register`
* **Body (JSON):**
    ```json
    {
      "username": "FabriDeveloper",
      "email": "fabri@prueba.com",
      "password": "123456password"
    }
    ```

#### 2. Iniciar Sesión (Login)
* **Método:** `POST`
* **URL:** `/api/auth/login`
* **Body (JSON):**
    ```json
    {
      "email": "fabri@prueba.com",
      "password": "123456password"
    }
    ```
* **Respuesta:** Recibirás un `token` que debes usar en las siguientes peticiones.

---

### 📝 Tareas (Requiere Token)
⚠️ **Importante:** En todas estas peticiones debes incluir el Header:
`Authorization: tu_token_jwt_aqui`

#### 3. Crear Tarea
* **Método:** `POST`
* **URL:** `/api/tasks`
* **Body:**
    ```json
    {
      "title": "Terminar el TP de Backend",
      "description": "Hacer el README y subir a GitHub"
    }
    ```

#### 4. Obtener Tareas
* **Método:** `GET`
* **URL:** `/api/tasks`

#### 5. Eliminar Tarea
* **Método:** `DELETE`
* **URL:** `/api/tasks/:id`

---

## 🧪 Colección de Pruebas
En la carpeta `docs/` encontrarás la carpeta `peticiones-bruno` para importar en Bruno/Postman y probar todo rápidamente.

## ✒️ Autor
* **Fabrizio Caricato** - [GitHub](https://github.com/fabricaricato)