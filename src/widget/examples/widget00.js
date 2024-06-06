import { getColorIterator } from "../utils/colors/color.js"

export default function (key, draw) {

    let nextColor = getColorIterator(key)

    for (let i=0; i < 10; i++) {
        let x = key.next()
        let y = key.next()
        let width = key.next()
        let height = key.next()
        let color = nextColor()
        draw.rect().size(width, height).move(x,y).fill(color).opacity(0.5)
    }
    
}
