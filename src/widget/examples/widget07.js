import { getColorIterator } from "../utils/colors/color.js"
import shape from "../utils/shape/shape.js"

export default function (key, draw) {
    
    let nextColor = getColorIterator(key)

    for(let x=0; x < 4; x++) {
        for(let y=0; y < 4; y++) {
            let s = shape(key.next256())
            s.fill(nextColor()).opacity(0.7)
            s.move(40+x*250, 40+y*250).size(180)
            s.addTo(draw)        
        }    
    }
}
