let tipo = prompt("Ingrese el tipo de prenda");
let color = prompt("Ingrese el color que desea");
let talle = prompt("Ingrese un Talle");

const busqueda = {
    tipo : tipo,
    color : color,
    talle: talle
}

function mostrarRopa (clothes) {
    clothes.forEach(ropa => {
        console.log(ropa.tipo + " - " +  ropa.color + " - " + ropa.talle + " - $" + ropa.precio);
    });
}      

function filtrarTipo (ropa) {
    if(busqueda.tipo){
        return  ropa.tipo === busqueda.tipo;
    }
    return ropa
}
function filtrarColor (ropa) {
    if(busqueda.color){
        return  ropa.color === busqueda.color;
    }
    return ropa
}
function filtrarTalle (ropa) {
    if(busqueda.talle){
        return  ropa.talle === busqueda.talle;
    }
    return ropa
}  

function filtrarRopa(){
    const res = ropa.filter(filtrarTipo).filter(filtrarColor).filter(filtrarTalle)
    if(res.length > 0){
        mostrarRopa(res)
        }else{
            console.log("No hay prendas de ese tipo")
        }
}
filtrarRopa()

class agregarRopa {
    constructor(tipo, color, talle, precio){
        this.tipo = tipo;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}
const prendas = [];
ropa.push(new agregarRopa('Camisa', 'Blanco', 'M', 9500));
ropa.push(new agregarRopa('Pantalon', 'Negro', 'L', 7500));  
ropa.push(new agregarRopa('Camisa', 'Blanco', 'XL', 9200));
console.log(ropa);

