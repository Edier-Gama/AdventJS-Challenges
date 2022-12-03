/*
Este año los elfos han comprado una máquina que envuelve regalos. 
Pero… ¡no viene programada! Necesitamos crear un algoritmo que le
ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. 
Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque 
en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * 
de forma que rodee totalmente al string por todos los lados. 

Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)

/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */

// Solución: 


function wrapping(gifts) {
    let nuevoArray = []

    for (i of gifts) {

        let papel = ''
        let regaloEnvuelto = '\n*' + i + '*\n'
        if (i.length == 1) {
            papel = '*'
        }if (i.length == 2) {
            papel = '**'
        }if (i.length == 3) {
            papel = '***'
        }if (i.length == 4) {
            papel = '****'
        }if (i.length == 5) {
            papel = '*****'
        }if (i.length == 6) {
            papel = '******'
        }
        regaloEnvuelto = papel + '\n*' + i + '*\n'+ papel
        nuevoArray.push(regaloEnvuelto); 
    }
    return nuevoArray

}

// Pruebas
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)