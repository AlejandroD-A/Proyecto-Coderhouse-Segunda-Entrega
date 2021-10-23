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

  - `GET` | /carrito/listar/:idItemCarrito

- **Agregar al carrito**

  - `POST` | /carrito/agregar/:id_producto

- **Eliminar item del carrito**
  - `DELETE` | /carrito/borrar/:idItemCarrito

##### Order

- **Crear nuevo pedido**
  - `POST` | /order

_made with_ :persevere: _by ale_
