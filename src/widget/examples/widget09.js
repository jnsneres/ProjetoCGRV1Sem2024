import { getColorIterator } from "../utils/colors/color.js"
import { icon, iconKey } from "../utils/iconify/icon.js"

export default function (key, draw) {
    let nextColor = getColorIterator(key)

    for(let lin=0; lin < 4; lin++) {
        for(let col=0; col < 4; col++) {
            let s = iconKey(key.next())
            s.fill(nextColor()).opacity(0.7)
            s.move(50+lin*250,30+col*250).size(140)
            s.addTo(draw)        
        }    
    }

}
