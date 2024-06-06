import shapes from "./shapes.js"
import getFromRaw from "./getFromRaw.js"
import shapelist from "./shapelist.js"

//getFromRaw()

function getShape(shapeName) {
    let shape = shapelist[shapeName]

    shape.draw = function (draw, x, y, w, h, fill = 'black') {
        let scaleX = w / shape.width
        let scaleY = h / shape.height

        let group = draw.group().transform({
            scaleX, scaleY, translate: { x, y }
        }).attr({ fill })
        group.path(shape.path)
    }

    return shape
}

export default getShape