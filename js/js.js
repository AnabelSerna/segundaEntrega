const productos = [
    {
        nombre: "Lait Concentre",
        marca: "Chabaud",
        aroma: "Gourmand",
        mililitros: 100,
    },
    {
        nombre: "Black Opium",
        marca: "Yves Saint Laurent",
        aroma: "Floriental",
        mililitros: 90,
    },
    {
        nombre: "Fame Parfum",
        marca: "Paco Rabanne",
        aroma: "Chipre Amaderada",
        mililitros: 75,
    },
    {
        nombre: "Olympea",
        marca: "Paco Rabanne",
        aroma: "Ambar Floral",
        mililitros: 80,
    },
    {
        nombre: "Idole Now EDP",
        marca: "Lancome",
        aroma: "Chipre Floral",
        mililitros: 100,
    },
    {
        nombre: "Devotion",
        marca: "Dolce & Gabbana",
        aroma: "Gourmand",
        mililitros: 100,
    }
];

alert("Bienvenido a Ana'Store, estas son nuestras fragancias disponibles:");

productos.shift();

const productosFiltrados = productos.filter(producto => producto.mililitros > 80);

let listaProductos = "";
productosFiltrados.forEach((producto, index) => {
    listaProductos += `${index + 1}. Nombre: ${producto.nombre}, Marca: ${producto.marca}, Aroma: ${producto.aroma}, Mililitros: ${producto.mililitros}\n`;
});

alert(listaProductos);

const opcion = prompt("¿Cuál desea comprar? (Ingrese el número de la opción)");

const numeroOpcion = parseInt(opcion, 10);
if (!isNaN(numeroOpcion) && numeroOpcion >= 1 && numeroOpcion <= productosFiltrados.length) {
    const productoSeleccionado = productosFiltrados[numeroOpcion - 1];
    alert(`Has seleccionado:\nNombre: ${productoSeleccionado.nombre}\nMarca: ${productoSeleccionado.marca}\nAroma: ${productoSeleccionado.aroma}\nMililitros: ${productoSeleccionado.mililitros}`);
    alert("Gracias por comprar en Ana'Store");
} else {
    alert("Opción no válida. Por favor, ingrese un número de opción válido.");
}