/*
Armar un algoritmo que recorra una estructura que
 guarde los puntos que N jugadores 
sacaron en un partido jugando al SAPO. 
Entregar quien fue el jugador ganador.
*/

// definir los datos que va a usar nuestro
// algoritmo, de entrada
const datos = [
    {'nombre' : 'Ayelen', 'tiros' : [100, 2, 34, 5, 67]},
    {'nombre' : 'Marcos', 'tiros' : [21, 2, 4, 51, 47]},
    {'nombre' : 'Ivo', 'tiros' : [1, 24, 54, 12, 34]},
    {'nombre' : 'Juan Manuel', 'tiros' :[2, 24, 54, 12, 340]},
];
/*
la suma de cada uno
*/ 

const suma = function (puntos){
    var total = 0;
    for (i = 0; i < puntos.length; i++) {
        total = total + puntos[i];
    }
    return total;
};

var newA = []; 
datos.forEach(persona => {
    puntos= suma(persona.tiros);
    nombre = persona.nombre;
    newA.push({nombre, puntos});
});
newA.sort(function (a, b) {return b.puntos-a.puntos;    
})

if (newA[0].puntos === newA[1].puntos) {
    console.log("El primer puesto es para " + newA[0].nombre + " y " + newA[1].nombre + " con " + newA[0].puntos + " puntos");
} else {
    console.log("El primer puesto es para " + newA[0].nombre + " con " + newA[0].puntos + " puntos");
};  

if (newA[1].puntos === newA[2].puntos) {
    console.log("El segundo puesto es para " + newA[1].nombre + " y " + newA[2].nombre + " con " + newA[1].puntos + " puntos");
} else {
    console.log("El segundo puesto es para " + newA[1].nombre + " con " + newA[1].puntos + " puntos");
}  

if (newA[2].puntos === newA[3].puntos) {
    console.log("El tercer puesto es para " + newA[2].nombre + " y " + newA[3].nombre + " con " + newA[2].puntos + " puntos");
} else {
    console.log("El tercer puesto es para " + newA[2].nombre + " con " + newA[2].puntos + " puntos");
}  

