## Proyecto Final

---

**Ejecutar en local**

Para ejecutar en local:  
`npm run dev`

Para ejecutar en modo Watch con Nodemon :  
`npm run watch`




**:rocket:Deploy**

Se realizó el deploy en Heroku.

https://ecom-ale.herokuapp.com/

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
