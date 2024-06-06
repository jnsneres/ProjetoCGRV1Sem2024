import { getColorIterator } from "../utils/colors/color.js"

export default function(key, draw) {

    let nextColor = getColorIterator(key)

    for (let lin = 0; lin < 10; lin++) {
        for (let col = 0; col < 10; col++) {
            let c = key.next16()
            let fill = nextColor()
            let shape = key.next16() % 4 
            if(shape == 0) {
                draw.rect().size(100,100).move(100 * col, lin*100).fill(fill)
            } 
            if(shape == 1) {
                draw.circle(100).move(100 * col, lin*100).fill(fill)
            }
            if(shape == 2) { 
                let top = 100 * lin
                let left = 100 * col
                draw.polyline([left, top, left+100, top, left+50, top+100]).fill(fill)
            }
            if(shape == 3) {
                draw.rect().size(50,50).move(100 * col, lin*100).fill(fill)
            } 
        }
    }
}
