# Aplicación Móvil - Autenticación con React Native y Expo

## Descripción

Esta es una aplicación móvil básica desarrollada en **React Native con Expo**, que permite a los usuarios:

- Registrarse (pantalla de registro)
- Iniciar sesión (pantalla de login)
- Ver su perfil (pantalla de perfil)
- Cambiar la foto de perfil (pantalla de perfil)

La aplicación se comunica con una **REST API** basada en PHP a través de puntos de acceso como `register.php` y `login.php`. Se valida cualquier error que ocurra durante el proceso de registro, inicio de sesión, y actualización de perfil.

## Requisitos

- Node.js (>= 12.x)
- Expo CLI (https://expo.dev/)
- Editor de código (como Visual Studio Code)
- Conexión a una REST API que maneje el registro y la autenticación (`register.php` y `login.php`)

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-proyecto
   ```

2. **Instalar dependencias**

   Asegúrate de tener `expo-cli` instalado globalmente:

   ```bash
   npm install -g expo-cli
   ```

   Luego, instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Iniciar el proyecto con Expo**

   ```bash
   expo start
   ```

4. **Ejecutar en un emulador o dispositivo físico**

   Usa la aplicación de Expo Go en un dispositivo físico, o selecciona un emulador desde el menú que ofrece Expo.

## Estructura del Proyecto

- **Pantallas**:
  - `LoginScreen.js`: Pantalla para que los usuarios inicien sesión.
  - `RegisterScreen.js`: Pantalla para que los usuarios se registren.
  - `ProfileScreen.js`: Pantalla donde los usuarios pueden ver y actualizar su información, incluida la foto de perfil.
  
- **Servicios**:
  - `api.js`: Manejador de llamadas a la API, que realiza las solicitudes HTTP `POST` a las rutas `login.php` y `register.php`.
