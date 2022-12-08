
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

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)