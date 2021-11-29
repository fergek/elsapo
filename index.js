/*
Armar un algoritmo que recorra una estructura que
 guarde los puntos que N jugadores 
sacaron en un partido jugando al SAPO. 
Entregar quien fue el jugador ganador.
Agrego un cambio para
*/

// definir los datos que va a usar nuestro
// algoritmo, de entrada
const datos = [
    {
        'nombre' : 'Ayelen',
        'tiros' : 
        [
           100, 2, 34, 5, 67
        ]
    },
    {
        'nombre' : 'Marcos',
        'tiros' : 
        [
           21, 2, 4, 51, 47
        ]
    },
    {
        'nombre' : 'Ivo',
        'tiros' : 
        [
           1, 24, 54, 12, 34
        ]
    },
    {
        'nombre' : 'Juan Manuel',
        'tiros' : 
        [
           2, 24, 54, 12, 340
        ]
    },
];


/*
la suma de cada uno
*/ 

var nombreGanador='';
var puntosDelGanador = 0;

const suma = function (puntos){
    var total = 0;
    for (i = 0; i < puntos.length; i++)
    {
        total = total + puntos[i];
    }
    return total;
};

datos.forEach(persona => {

    totalPuntos = suma(persona.tiros);

    if (totalPuntos > puntosDelGanador)
    {
        puntosDelGanador = totalPuntos;
        nombreGanador = persona.nombre;
    }
});

console.log ('Quien gano fue', nombreGanador, 'con', puntosDelGanador, 'puntos');