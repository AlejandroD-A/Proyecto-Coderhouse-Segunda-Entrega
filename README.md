## Proyecto Final

---

Se agrego JSON postman en root.


**Ejecutar en local**

Crear development.env con las variables dentro de env.example.



Para ejecutar en local:  
`npm run dev`

Para ejecutar en modo Watch con Nodemon :  
`npm run watch`

Opciones disponibles: 
`npm run watch -- --port=8082`
`npm run watch -- --persistence=3`
`npm run watch -- --sessionTime=10000`
`npm run watch -- --cluster=CLUSTER`



**:rocket:Deploy Backend**

Se realizó el deploy en Heroku.

https://ecom-ale.herokuapp.com/

---

**:rocket:Deploy FrontEnd**

Se realizó el deploy del cliente en VERCEL.

https://proyecto-coderhouse-trabajo-final-git-dev-alejandrod-a.vercel.app/

---

#### Rutas de la API:

##### Productos

- **Obtener todos los productos**

  - `GET` | api/productos

- **Filtrar Productos**

  - `GET` | api/productos/?nombre=producto&codigo=5&precio=200.00&stock=1d

- **Obtener un producto**

  - `GET` | api/productos/:id

- **Crear un nuevo producto**

  - `POST` | api/productos

- **Actualizar producto**

  - `PUT` | api/productos/:id

- **Eliminar producto**
  - `DELETE` | api/productos/:id

##### Carrito

- **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
  - `GET` | api/carrito

- **Obtener un producto del carrito con los campos id y timestamps de carrito**

  - `GET` | api/carrito/:idItemCarrito

- **Agregar al carrito**

  - `POST` | api/carrito/:id_producto

- **Eliminar item del carrito**
  - `DELETE` | api/carrito/:idItemCarrito

##### Order

- **Crear nuevo pedido**
  - `POST` | api/order

_made with_ :persevere: _by ale_
