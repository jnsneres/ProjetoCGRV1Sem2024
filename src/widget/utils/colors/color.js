import colorPalette from "./color-palette"
const tones = ['_100', '_200', '_300', '_400', '_500', '_600', '_700', '_800', '_900']

//console.log(Object.keys(colorPalette));

function getColorIterator(keygen) {
    return function() {
        return color(keygen.next256()) 
    }
}

function color(idx, tone = 5) {
    if(typeof(idx) == 'number') {
        let ridx = idx%18
        //console.log(ridx);
        let key = Object.keys(colorPalette)[ridx]
        //console.log(key);
        return colorPalette[key][tones[tone]]    
    } else {
        //console.log(idx);
        return colorPalette[idx][tones[tone]]
    }
}

export { color, getColorIterator }