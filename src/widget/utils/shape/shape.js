import { G } from "@svgdotjs/svg.js"
import shapelist from "./shape-list.js"

export default function (key) {
    let keys = Object.keys(shapelist)
    let name = keys[key%keys.length]
    //console.log(name);
    let shape = shapelist[name]
    let path = shape.path
    let g = new G()
    g.path(path)
    return g
}