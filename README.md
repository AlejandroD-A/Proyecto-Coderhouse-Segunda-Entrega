## Tercera Entrega Proyecto Final

**Autenticacion con Passport**

Se realizo el Schema User dentro de `persistence/mongo/schema`.

```
  {
    email :
        {
          type: String,
          unique: true,
          index: true,
          required: true
        },
    password :
        {
            type: String,
            required: true
        },
    name :
        {
            type: String,
            required: true
        },
    lastName :
        {
            type: String,
            required: true
        },
    age :
        {
            type: String,
            required: true
        },
    phone :
        {
            type: String,
            required: true
        },
    avatar :
        {
            type: String,
            required: true
        },
}

```

Dentro de este schema se implementaron las funciones de encriptacion de contraseña ( al crearse el usuario con el mdw de mongoose 'pre' ) y la de verificacion de contraseña como un metodo propio del modelo. Ambas funciones utilizan la libreria Bcrypt.
Se creo el archivo config/passport en el que se encuentra las Strategy utilizada ( Login y Register ).

Se aplicaron sesiones utilizando mongo-connect para la recuperacion de estas en la nube.

Se creo el middleware checkAuth que valida si el usuario esta autenticado.

Se crearon las rutas:
`POST auth/login`: Utiliza la strategy 'login' definida en passport y devuelve el usuario en caso de que no haya problemas._Recibe desde el body email y password_
`POST auth/register`: Utiliza la strategy 'register' definida en passport y devuelve el usuario en caso de que no haya problemas._Recibe desde el body los datos del modelo User _  
 `GET auth/logout`: Realiza el evento logout que provee passport y devuelve el mensaje de OK si se realiza sin problemas.
`GET auth/user`: Devuelve los datos del usuario logueado.

**Front-End**

Se implemento la parte de Front-End utilizando React.
Se crearon las rutas '/login' '/register' utilizando react-router. Al realizar submit de estos formularios redirigen a la root de la aplicacion.

Se creo un componente Header el cual renderiza el carrito, los datos del usuario ingresado y el boton de logout. En caso de no estar logueado muestra los enlaces a Register y Login.

Se creo el componente Cart el cual muestra los elementos del carrito. Se creo la vista /Cart.

**NodeMailer**
Se definieron variables de entorno GMAIL_USER, GMAIL_PASSWORD para enviar mails al administrador a traves de esta liberia.
Se creo la funcion newRegister dentro de la carpeta `messaging/mail`, la cual recibe un usuario y envia un mail al administrador definido en el archivo .ENV.
Esta se implementa al crearse un nuevo usuario dentro de Passport.

**Twillio**
Se definieron las variables necesarias dentro del .ENV.
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_NUMBER
TWILIO_WHATSAPP
TWILIO_ADMIN_NUMBER.
Se crearon las funciones necesarias dentro de la carpeta `messaging/sms` y `messaging/whatsapp`

**Carrito**

Se incluyo en el Schema de carrito `persistence/mongo/schemas/CartSchema` la propiedad `User` en la cual se guarda una referencia al usuario que agrego este producto a la collección 'Carts'.

Se modificaron las rutas de Cart aplicando el middleware CheckAuth antes de realizar cualquier consulta.

Se modifico el modelo Cart, (el cual realiza las consultas a la bd a traves de los Schemas ), estos reciben el userId para realizar las consultas propias de cada usuario, tanto al listar, agregar y al eliminar una entrada.

**Pedido**

Para la persistencia de los pedidos se creo el Schema Order (`persistence/mongo/schemas/OrderSchema`) y el model Order para la utilizacion a traves del controlador.

Al modelo Order se le creo el metodo 'create' el cual obtiene todos los articulos guardados dentro del carrito y los guarda dentro del Schema Order, despues de esto elimina los elementos del carrito del usuario que realiza la accion.

Para la confirmacion por el usuario se creo la ruta `/order`. AL realizar un request post sobre esta llama a la funcion `crearPedido` de la clase `OrderController` la cual utiliza la funcion `create` antes descripta, despues de esto envia el mail al Administrador , un whatsapp a este mismo y un sms al usuario. Ocurran o no los eventos de mensajes, si se creo correctamente, devuelve el pedido cargado.

**ASPECTOS QUE SE DEBIAN INCLUIR**

Se creo la funcionalidad cluster a traves del archivo `src/index.js`, este se ejecuta si se le pasa por argumentos la palabra 'CLUSTER'.

Se realizo un logger utilizando winston y se aplico a los archivos server, index, al realizarse un nuevo pedido, un nuevo registro y en caso de errores. Este se encuentra en la carpeta `logger`.

Se realizo la prueba de performance sobre la ruta `productos/listar `en la cual se ve la diferencia de respuesta cuando un usuario se encuentra logueado y cuando no. El resultado de esta se encuentra en la carpeta en el root: `profiling`.

---

**Ejecutar en local**

Para ejecutar en local:  
`npm run dev`

Para ejecutar en modo Cluster :  
`npm run dev CLUSTER`

**:rocket:Deploy**

Se realizó el deploy en Heroku.

https://ecom-ale.herokuapp.com/

---

#### Rutas de la API:

##### Productos

- **Obtener todos los productos**

  - `GET` | /productos/listar

- **Filtrar Productos**

  - `GET` | /productos/listar?nombre=producto&codigo=5&precio=200.00&stock=1

- **Obtener un producto**

  - `GET` | /productos/listar/:id

- **Crear un nuevo producto**

  - `POST` | /productos/agregar

- **Actualizar producto**

  - `PUT` | /productos/actualizar/:id

- **Eliminar producto**
  - `DELETE` | /productos/borrar/:id

##### Carrito

- **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
  - `GET` | /carrito/listar
- **Obtener un producto del carrito con los campos id y timestamps de carrito**

  - `GET` | /carrito/listar/:id

- **Agregar al carrito**

  - `POST` | /carrito/agregar/:id_producto

- **Eliminar item del carrito**
  - `DELETE` | /carrito/borrar/:id

##### Order

- **Crear nuevo pedido**
  - `POST` | /order/

_made with_ :persevere: _by ale_
