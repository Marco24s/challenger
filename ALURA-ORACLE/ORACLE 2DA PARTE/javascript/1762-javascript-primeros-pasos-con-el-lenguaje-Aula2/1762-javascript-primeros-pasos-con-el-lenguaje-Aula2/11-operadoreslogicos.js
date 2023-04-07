const ciudadDestino = "Bogota";
const ciudadesDisponible = new Array ("Bogota", "Lima", "Buenos Aires", "Santiago");

let edadPasajero = 17;
let estaAcompanado = true;
let tienePasaporte = true;

console.log(`verificando pasajes para $(ciudadDestino)`);

if (ciudadesDisponible.indexOf(ciudadDestino) >-1 && 
    edadPasajero >=18 && tienePasaporte) {
        console.log ("pasaje disponible para la venta");
    } else {
        console.log ("Ciudad no disponible o pasajero no cumple con los requisitos");
    }