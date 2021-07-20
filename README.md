## Proyecto Final- Segunda entrega

A partir de la primera entrega se debia cumplir: 

Se debia implementar diferentes persistencias utilizando clases con la misma interfaz( los mismos metodos ). Cada clase debia representar una persistencia diferente.
Para seleccionar el modo de persistencia se debia implementar un patron Factory el cual reciba un numero de persistenca. y devolver el objeto correspondiente para el uso por parte del controlador en cada caso: Carrito, Productos.




#### Rutas: 

 ##### Productos

 * **Obtener todos los productos**
    * `GET` | /productos/listar
  
 * **Filtrar Productos**
    * `GET` |  /productos/listar?nombre=producto&codigo=5&precio=200.00&stock=1
  
 * **Obtener un producto**
    * `GET` |  /productos/listar/:id 
 
 * **Crear un nuevo producto**
    * `POST` |  /productos/agregar
 
 * **Actualizar  producto**
    * `PUT` |  /productos/actualizar/:id
 
 * **Eliminar producto**
    * `DELETE` |  /productos/borrar/:id
 
 ##### Carrito

* **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
    * `GET` | /carrito/listar
  
 * **Obtener un producto del carrito con los campos id y timestamps de carrito**
    * `GET` |  /carrito/listar/:id 
 
 * **Agregar al carrito**
    * `POST` |  /carrito/agregar/:id_producto
 
 * **Eliminar item del carrito**
    * `DELETE` |  /carrito/borrar/:id


Para ejecutar en local:   
`npm run dev`

El nombre de la base de datos en mysql es `ecommerce`
Para realizar las migracion en mysql:
`npm run mysql:migrate`

Para realizar el drop de las tablas: 
`npm run mysql:drop`




*by Alejandro Aliaga.*

>Curso de Programacion Backend Coderhouse
