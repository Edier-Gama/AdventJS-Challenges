function distributeGifts(packOfGifts, reindeers) {
    let pesoMax = reindeers.join('').length * 2
    let pesoRegalos = packOfGifts.join('').length 

    const diferencia = pesoMax / pesoRegalos
    console.log(parseInt(diferencia));
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", 'seisseis']

distributeGifts(packOfGifts, reindeers);

