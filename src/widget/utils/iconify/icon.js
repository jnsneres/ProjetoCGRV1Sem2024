import { G } from "@svgdotjs/svg.js"
import iconList from "./icon-list.js"

function icon(name) {
    //let keys = Object.keys(iconList)
    //let name = iconList[name]
    //console.log(name);
    let objIcon = iconList[name]
    //console.log("objIcon",objIcon);
    let g = new G()
    let paths = objIcon.paths
    for(let i in paths) {
        g.path(paths[i])
    }
    return g
}

function iconKey(key) {
    let keys = Object.keys(iconList)
    let name = keys[key%keys.length]
    //console.log(name);
    let objIcon = iconList[name]
    //console.log("objIcon",objIcon);
    let g = new G()
    let paths = objIcon.paths
    for(let i in paths) {
        g.path(paths[i])
    }    
    return g
}

export { icon, iconKey }