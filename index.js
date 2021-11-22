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

var newAsort = newA.sort(function (a, b) {return b.puntos-a.puntos;    
})

console.log("El primer puesto es para " + newA[0].nombre + " con " + newA[0].puntos + " puntos");
console.log("El segundo puesto es para " + newA[1].nombre + " con " + newA[1].puntos + " puntos");
console.log("El tercer puesto es para " + newA[2].nombre + " con " + newA[2].puntos + " puntos");