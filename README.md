## Proyecto Final

---

Para ejecutar en local:  
`npm run dev`

El nombre de la base de datos en mysql es `ecommerce`
Para realizar las migracion en mysql:
`npm run mysql:migrate`

Para realizar el drop de las tablas:
`npm run mysql:drop`

---

#### Rutas:

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

---

_made with_ :persevere: _by ale_
