import utils from "./utils.js"
import { G } from "@svgdotjs/svg.js"

export default function (key) {
    let path = utils.getPath(key).path
    let g = new G()
    g.path(path)
    return g
}