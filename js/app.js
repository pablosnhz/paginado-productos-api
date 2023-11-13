import { traerData } from "./api-fetch.js";

const info = await traerData()

const cuerpoTabla = document.querySelector('#cuerpo-tabla');


let limite = 5;
let desde = 0;
let paginas = info.length / limite;
let paginaActiva = 1;

let arreglo = info.slice(desde, limite)

console.log(arreglo)

const cargarProductos = () => {
    cuerpoTabla.innerHTML = '';
    arreglo.map((producto)=> {
        const fila = document.createElement('tr');
        fila.setAttribute('key', producto.id);
        
        const contenido = `
                            <th scope="row">${producto.id}</th>
                            <td>${producto.title}</td>`;
        fila.innerHTML = contenido;
        cuerpoTabla.append(fila)
    })

   
}
cargarProductos() 
