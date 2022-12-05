const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 3, h: 2 },
    { l: 3, w: 2, h: 2 }
]


function fitsInOneBox(boxes) {
   let total = 0 
   let i = 0
   let z = 0

   for(i in boxes){
    let medidas = [i.l, i.w, i.h]
    for (z of medidas) {
        total = total + z
    }
   }

   let rta = true
   parseInt(total) % 3 == 0 ? rta = true: rta = false
}
fitsInOneBox(boxes)