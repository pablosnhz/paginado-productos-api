# paginas-productos-api
consumo de API donde se realiza un paginado de los productos 

Primero estoy definiendo una constante con una url que trae datos de una url de productos en el cual usamos async para poder usar el await dentro de la funcion donde se espera una respuesta 200 del url que va a traer los datos en formato json y en el caso de no ser asi salta un error, se que podria haberle puesto un mensaje de error tambien.

Generamos un arreglo que nos va a dar los primero 5 productos, desde el 0 al 4. Luego se dividio el contenido por el limite para que se repartan en las paginas todos los productos.

Funcion cargarProductos, genere un mapeo para recorrer los elementos donde se creo una tr para hacer vinculacion con el id en la fila y luego una const para definir los valores de para que genere le di la ubicacion a su id como a su titulo finalmente agregandola al cuerpotabla con el append en sus respectivas filas e hicimos su llamado para mostrar en tabla.

Funcion cargarItemPaginacion, hicimos un llamado al id para generar las paginas dentro del rango de productos que haya disponibles en el total, creamos el li para darle el tipo de orden de los numeros de paginas, generando una clase para darle estilo y un button para darle interracion al llamado que hicimos y asi agregando los numeros del index. una vez termine de cargar los productos hace llamado al CargarItemPaginacion().

Funcion pasarPagina en el cual lo tuve que llamar de forma global para que funcion con window. la finalidad de la funcion es que sirve para reajustar los id y donde el limite 5 de id por pagina, se multiplica por pagina, si en la pagina 1 hay 5 id, en la segunda va a haber 10 y pasarPagina es llamada por el evento onclick de la const cargarItemPaginacion.

Por ultimo realice el previous y next de las paginas. 
