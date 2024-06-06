import { getColorIterator } from "../utils/colors/color.js"
import { icon, iconKey } from "../utils/iconify/icon.js"

export default function (key, draw) {
    let nextColor = getColorIterator(key)

    let i = iconKey(key.next256())
    i.fill(nextColor()).opacity(0.7)
    i.move(100,100).size(400)
    i.addTo(draw)        

    i = iconKey(key.next256())
    i.fill(nextColor())
    i.move(550,550).size(300)
    i.addTo(draw)
}
