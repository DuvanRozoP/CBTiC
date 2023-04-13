# BACKEND CBTIC

## Auth

- PETICIONES EXISTENTE
    - signup - POST
    - signin - POST

### signup

- path: http://localhost:3003/auth/signup
- method: POST
- Body: esto es lo que deberas enviar por body

```json
{
  "user": "rozoparraduvan@gmail.com",
  "password": "123456789Pp+",
  "confirmPassword": "123456789Pp+"
}
```

- Validation: se cuenta con varias validaciones las cuales tenemos.

  - valida si los campos llegan vacidos.
  - valida los caracteres el busca que sea efectivamente un corre mas no se sabe si realmente pueda existir (aun en proceso).
  - valida longitudes de password del usuario.
  - verifica si las contrasena coinciden con el de confirmacion.
  - devuelve un token en el header (el token debe ser almacenado en el localstorage)

- response/res:

```ts
{
  success: messageSuccess;
}
```

- error:

```ts
{
  error: errorFatal,
}
```

### signin

- path: http://localhost:3003/auth/signin
- method: POST
- Body: esto es lo que deberas enviar por body

```json
{
  "user": "rozoparraduvan@gmail.com",
  "password": "123456789Pp+"
}
```

- Validation: se cuenta con varias validaciones las cuales tenemos.

  - valida si los campos llegan vacidos.
  - valida si existe el usuario en la base de datos.
  - valida longitudes de password del usuario.
  - verifica si las contrasena coinciden
  - devuelve un token en el header (el token debe ser almacenado en el localstorage)

- response/res:

```ts
{
  success: messageSuccess;
}
```

- error:

```ts
{
  error: errorFatal,
}
```
