//operadores de comparacion

const ciudadDestino = "buenos aires";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

console.log(ciudadesDisponibles.indexOf(ciudadDestino));

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("pasaje disponible para venta");
} else {
    console.log("ciudad no diponible para la venta");
}