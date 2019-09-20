/* Comentario 
  * multilinea */
// Cometario de una linea.

/* Variables: var, let y const.
 * Se recomienda utilizar let en vez de var.*/

let variable = 'dato'
let variable1, otra, otraMas, condicional
const pi = 3.14

// Tipos de datos

//Primitivos: números, String (" ", ' ', `${variable}`), boolean, Undefined, Null (No existe), Symbol().

// Compuestos: Array, Objetos.

let array = [1,2,3,4]

let dato = {
    nombre = 'Paco',
    apellido = 'Pacheco',
    edad = 20
}

// Operador typeof que devuelve un string con el tipo de dato.
typeof variable

// Type coertion: JavaScript interpreta cada dato y si es necesario lo convierte.

// 5 + 'hola' = '5hola' || 'hola' + 5 = 'hola5'
// 'hola' * 10 = NAN || '2a' * 4 = NAN
// '2' * 4 = 8
// false + 'hola' = 'falsehola'
// true + 0 = 1, false + 0 = 0

// Operación ternario: expresion ? si es verdadero : si es falso
2 > 1 ? 'Si' : 'No'


// Condisionales y ciclos:

if (2 < 4) {
    console.log('Si cumple')
}

if (2 > 4) {
    console.log('Si aparezco 1')
} else if (5 > 4) {
    console.log('Si aparezco 2')
} else {
    console.log('Si aparezco 3') 
}

// Valores truthy y falsy

// Falsy: 0, "", NAN, undefined, null
// Truthy: string no vacío, #!=0, arrays, objetos

switch ( numero) {
    case 1 :
        // Código
        break
    default:
        // Código
        break
}

for(let i=0; i < 10; i++) {
    // Código
}

while(condicional) {
    // Código
}

do {
    // Código
}while(condicional)


/* Funciones
 * Son ciudadanos de primera clase.
 * Como declarar: */

// Declaración:

function declaracion (parametro) {
    //Código
    
}

// Expresión:

// Con function (en desuso)
let expresion = function (parametro) {
    // Código
}

// Funciones de flecha (Recomedado desde ES6)
const flecha = (parametro) => {
    // Código
}

// o cuando solo se utliza una instrucción

const flecha2 = (a, b) => a + b

// Parámetros rest (Desde ES6)
// Permite para infinitos argumentos.

const sumas = (...numeros) => {
    let resultado = 0
    for(let i=0; i < numeros.length; i++) {
        resultado += numeros[1] 
    }

    return resultado
}

// Clases

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }

    cambiarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }
}

class Cliente extends Persona {
    constructor (nombre, apellido, edad, email){
        super(nombre, apellido, edad)
        this.email = email
    }
}

// El DOM

// Seleccionar un elemeto del DOM

// Con Id :
document.getElementById('main')

// Con selectores de CSS:
document.querySelector('.main')
element.querySelector()
document.querySelectorAll('.li') 
element.querySelectorAll()

// Eventos

document.getElementById('btn').addEventListener ('clic', e => {
        // Código
        alert('Hola mundo')
})


// Insertar en el DOM
/* insertAdjacent
    Métodos
        insertAdjacentElement(position,el)
        insertAdjacentHTML(position,html)
        insertAdjacentText(position,text)
    Posiciones
        beforebegin
            hermano anterior
        afterbegin
            primer hijo
        beforeend
            ultimo hijo
        afterend
            hermano siguiente
*/

let tem = `<h1>Hola mundo</h1>`
const main = document.getElementById('main')

main.insertAdjacentHTML("beforeend", tem)