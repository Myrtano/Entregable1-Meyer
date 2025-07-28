// *** ARRAY DE PRODUCTOS ***
const productos = [
    { nombre: 'Frasco de Suplementos DRAPA - 1 Mes', precio: 19990 },
    { nombre: 'PROMO 2 Frascos DRAPA - 2 Meses', precio: 33990 },
    { nombre: 'Frasco de Fat Burner 360 Pro - 1 Mes', precio: 21990 },
    { nombre: 'PROMO 2 Frascos 360 Pro', precio: 34990 }
];

// *** FUNCIÓN DE LA LISTA ***
function mostrarLista() {
    let lista = 'Bienvenido a DRAPA.\nLista de productos:\n';
    for (let i = 0; i < productos.length; i++) {
        lista += `${i + 1}. ${productos[i].nombre}: $${productos[i].precio}\n`;
    }
    return lista;
}

// *** FUNCIÓN AGREGAR AL CARRITO ***
function agregarAlCarrito(carrito, productoIndex) {
    if (productoIndex >= 0 && productoIndex < productos.length) {
        carrito.push(productos[productoIndex]);
        alert(`${productos[productoIndex].nombre} ha sido agregado al carrito.`);
    } else {
        alert('Producto no válido. Por favor, ingrese una opción correcta.');
    }
}

// *** FUNCIÓN DEL CÁLCULO DE LA COMPRA ***
function calcularTotal(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

// *** FUNCIÓN PARA REALIZAR LA COMPRA ***
function realizarCompra() {
    let carrito = [];
    let seguirComprando = true;
    
    while (seguirComprando) {
        let lista = mostrarLista();
        let seleccion = prompt(lista + 'Elija un producto por número o escriba "0" para finalizar la compra:');
        
        seleccion = parseInt(seleccion);
        
        if (seleccion === 0) {
            seguirComprando = false;
            break;
        }
        
        agregarAlCarrito(carrito, seleccion - 1);
        
        let continuar = prompt('¿Desea seguir comprando? (Sí/No)');
        if (continuar.toLowerCase() !== 'sí') {
            seguirComprando = false;
        }
    }
    
    // *** ALERTA FINAL ***
    let total = calcularTotal(carrito);
    alert(`Su compra total es de: $${total}\n!Gracias por comprar en DRAPA!`);
}


realizarCompra();
