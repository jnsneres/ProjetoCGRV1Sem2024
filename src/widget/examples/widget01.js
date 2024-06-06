import { getColorIterator } from "../utils/colors/color.js"
import rects from "../utils/grids/grid01.js"

export default function (key, draw) {

    let nextColor = getColorIterator(key)

    for (let idx in rects) {
        let r = rects[idx]
        draw.rect().size(r.width, r.height).move(r.x,r.y).fill(nextColor())
    }
    
}
