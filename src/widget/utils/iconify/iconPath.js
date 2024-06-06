
async function createIcon(prefix, icon) {
    const iconPath = {
        width: 0,
        height: 0,
        prefix: '',
        iconName: '',
        paths: [],

        getUrl(prefix, icon) {
            const url = `https://api.iconify.design`
            return `${url}/${prefix}.json?icons=${icon}`
        },

        getPath(data) {
            let iconData = data.icons[Object.keys(data.icons)[0]]
            //console.log('iconData',iconData);
            let body = iconData.body
            //console.log('body', body);
            let vet = body.split("<path")
            vet.shift()
            //console.log('vet',vet);
            let paths = []
            for(let i in vet) {
                let inner = vet[i].split('d=') 
                //console.log("inner",inner);
                let inner2 = inner[1].split('"')     
                //console.log("inner2",inner2);
                let path = inner2[1]
                paths.push(path)
            }
            //console.log("paths",paths);    
            return paths
        },

        async loadIcon(prefix, icon) {
            let url = iconPath.getUrl(prefix, icon)
            //console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            iconPath.prefix = prefix
            iconPath.iconName = icon
            iconPath.width = data.width
            iconPath.height = data.height
            iconPath.paths = iconPath.getPath(data)
            //console.log('iconPath', iconPath);
        },

        drawIcon(draw, x, y, w, h, fill = 'black') {
            let scaleX = w / iconPath.width
            let scaleY = h / iconPath.height

            let group = draw.group().transform({
                scaleX, scaleY, translate: { x, y }
            }).attr({ fill })
            group.path(iconPath.path)
        }

    }

    await iconPath.loadIcon(prefix, icon)
    return iconPath
}

export default createIcon