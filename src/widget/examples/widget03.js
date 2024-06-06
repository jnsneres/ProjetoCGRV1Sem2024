import { getColorIterator } from "../utils/colors/color.js"
import rects from "../utils/grids/grid01.js"

export default function(key, draw) {

    let nextColor = getColorIterator(key)

    for (let idx in rects) {
        let rect = rects[idx]
        let c = nextColor()
        let shape = key.next256() % 4
        if (shape == 0) {
            draw.rect().size(rect.width, rect.height).move(rect.x, rect.y).fill(c)
        }
        if (shape == 1) {
            draw.circle(rect.width).move(rect.x, rect.y).fill(c)
        }
        if (shape == 2) {
            let x1 = rect.x
            let y1 = rect.y
            let x2 = rect.x + rect.width
            let y2 = rect.y
            let x3 = rect.x + rect.width/2
            let y3 = rect.y + rect.height
            draw.polyline([x1, y1, x2, y2, x3, y3]).fill(c).opacity(0.5)
        }
        if (shape == 3) {
            let x1 = rect.x
            let y1 = rect.y + rect.height
            let x2 = rect.x + rect.width
            let y2 = rect.y + rect.height
            let x3 = rect.x + rect.width/2
            let y3 = rect.y + 0
            draw.polyline([x1, y1, x2, y2, x3, y3]).fill(c).opacity(0.6)
        }
    }
}
