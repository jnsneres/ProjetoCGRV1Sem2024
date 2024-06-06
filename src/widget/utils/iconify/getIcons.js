import fs from 'node:fs'
import createIcon from "./iconPath.js"

console.log("get icons");

let list = [
    "mdi:home", "mdi:arrow-left", "ic:baseline-alternate-email",
    "ic:baseline-agriculture", "ic:baseline-attractions", "material-symbols-light:shapes",
    "material-symbols-light:play-shapes-rounded", "material-symbols-light:play-shapes", "ic:baseline-lightbulb",
    "ic:baseline-gps-fixed", "ic:baseline-hub", "ic:baseline-grain",
]

async function getIcons() {
    let iconList = {}
    for (let idx in list) {
        let [pre, name] = list[idx].split(":")
        console.log(`loading [${list[idx]}] ...`);
        let objIcon = await createIcon(pre, name)
        let elem = JSON.parse(JSON.stringify(objIcon))
        //console.log("elem", elem);
        iconList[list[idx]] = elem
    }
    //console.log(iconList);
    console.log("ok");
    let content = JSON.stringify(iconList, null, 2)
    try {
        fs.writeFileSync('./src/widget/utils/iconify/icon-list.js', `export default ${content}`);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}

getIcons()
