function createCube(size) {
    let inicioCubo = ''
    let cuerpoCuboMolde = ''
    let parteBajaDelCubo = ''
    let cubito = []
    let cubitoAbajo = []
    let espacioPillo = size
    let espacioMasPillo = size
    const cuboDeUno = `/\\_\\\n\\\/_/`
    const espacio = ' '
    const inicioSalteado= `/\\`
    const inicioDuplicado = '/\\'
    const separador = '\\_'
    const parteDeAbajo = '\\/'
    const parteDeAbajoDuplicada = '\\/'
    const parteDeAbajoFinal = '_/'


    function range(start, end) {
        let arrayExample = []

        for (let index = start; index <= end; index++) {
            arrayExample.push(index)
        }
        return arrayExample   
    }
    
    let result = range(1, size)

     inicioCubo = espacio.repeat(size -1) + `/\\_` + separador.repeat(size - 1) + '\\\n' 
     let finalDelCubo = espacio.repeat(size-1)+ parteDeAbajo + parteDeAbajoFinal.repeat(size)

     for (let i in result) { 
         espacioMasPillo--
         cuerpoCuboMolde =espacio.repeat(espacioMasPillo) + inicioSalteado + inicioDuplicado.repeat(i++) + '_' 
         + separador.repeat(size - 1) + '\\' + '\n'

         cubito.push(cuerpoCuboMolde) 
     }    
     cubito[0] = inicioCubo
    
     for (let i in result) {
        espacioPillo--
         parteBajaDelCubo = espacio.repeat(espacioPillo) +parteDeAbajo + parteDeAbajoDuplicada.repeat(i) 
         + parteDeAbajoFinal.repeat(size - 1) + '_/\n'

         cubitoAbajo.unshift(parteBajaDelCubo)
      
     cubitoAbajo.pop()
     cubitoAbajo.push(finalDelCubo) 
     }
 let cuboArray = [...cubito, ...cubitoAbajo].join('')
 let cubo = String(cuboArray)
 console.log(cubo); 
}
createCube(10)

