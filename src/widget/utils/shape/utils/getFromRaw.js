import rawShapes from "./rawShapes.js"
import xmlToJSON from "./xmltojson.js"

//console.log(xmlToJSON);

export default function getFromRaw(name) {
    let items = {}
    for(let key in rawShapes) {
        console.log("key",key);
        let result = xmlToJSON.parseString(rawShapes[key]);	// parse
        //console.log("result",result);
        let viewBoxArray = result.svg[0]._attr.viewBox._value.split(" ")
        let width = viewBoxArray[2]
        let height = viewBoxArray[3]
        //console.log("result.svg[0]",result.svg[0]);
        if(result.svg[0].path) {
            let path = result.svg[0].path[0]._attr.d._value
            //console.log("path",path);
        
            let item = {
                width, height, path
            }
            items[key] = item    
    
        }
    }

    console.log("items",items);

}