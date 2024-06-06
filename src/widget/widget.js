import { getColorIterator } from "./utils/colors/color.js";
import blob from "./utils/blob/blob.js"

function nextFace(key, draw) {
    let cx = 500;
    let cy = 500;
    let face = 200 + key.next256();

    blobDraw(key, draw)

    faceDraw(key, draw, face, cx, cy)

    olhoDraw(key, draw, face, cx, cy)

    narizDraw(draw, face, cx, cy)

    bocaDraw(key, draw, face, cx, cy)
}

function blobDraw(key, draw) {
    let corCabelo = getColorIterator(key);
    let b = blob(key.next())
    b.fill(corCabelo()).opacity(0.7)
    b.move(0, 0).size(1000)
    b.addTo(draw)
}

function faceDraw(key, draw, face, cx, cy) {
    let corFace = getColorIterator(key);
    let formatoRosto = key.next16() % 3

    switch (formatoRosto) {
        case 0:
            draw.circle().attr({
                cx, cy, r: face, fill: corFace()
            });
            break;
        case 1:
            draw.rect().attr({
                x: cx - face / 2 - 50, y: cy - face / 2 - 50, width: face + 50 * 2, height: face + 50 * 2, fill: corFace(), opacity: 1
            });
            break;
        case 2:
            const escalaDoTriangulo = 1.8;
            const vertice1 = { x: cx, y: cy - face / 2 * escalaDoTriangulo };
            const vertice2 = { x: cx - face / 2 * escalaDoTriangulo, y: cy + face / 2 * escalaDoTriangulo };
            const vertice3 = { x: cx + face / 2 * escalaDoTriangulo, y: cy + face / 2 * escalaDoTriangulo };
            draw.polygon(`${vertice1.x},${vertice1.y} ${vertice2.x},${vertice2.y} ${vertice3.x},${vertice3.y}`).attr({ fill: corFace(), opacity: 1 });
            break;
    }
}

function olhoDraw(key, draw, face, cx, cy) {
    let corOlho = "black"
    let corPupila = "white"

    let olho = face * 0.1;
    let pupila = face * 0.1 * 0.5;


    draw.circle().attr({
        cx: cx - face * 0.3, cy: cy - face * 0.25, r: olho, fill: corOlho
    });
    draw.circle().attr({
        cx: cx + face * 0.3, cy: cy - face * 0.25, r: olho, fill: corOlho
    });

    draw.circle().attr({
        cx: cx - face * 0.3 - 5, cy: cy - face * 0.25 + 10, r: pupila, fill: corPupila
    });
    draw.circle().attr({
        cx: cx + face * 0.3 - 5, cy: cy - face * 0.25 + 10, r: pupila, fill: corPupila
    });
}

function narizDraw(draw, face, cx, cy) {
    let corNariz = "white"

    let narizSize = face * 0.2;
    let narizPoints = `${cx},${cy + narizSize / 2} ${cx - narizSize / 2},${cy - narizSize / 2} ${cx + narizSize / 2},${cy - narizSize / 2}`;
    draw.polygon(narizPoints).attr({ fill: corNariz });
}

function bocaDraw(key, draw, face, cx, cy) {
    let corBoca = getColorIterator(key);

    let bocaWidth = face * 0.4;
    let bocaHeight = face * 0.2;
    draw.rect().attr({
        x: cx - bocaWidth / 2, y: cy + face * 0.25, width: bocaWidth, height: bocaHeight, fill: corBoca()
    });
}

function widget(key, draw) {
    nextFace(key, draw);
}

export default widget;