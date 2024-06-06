<template>
    <div class="mt-3 flex justify-center">

        <svg width="400" height="400"
             viewBox="0 0 400 400" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
             <rect x="0" y="0" width="400" height="400" style="fill-opacity: 0; stroke: grey;"/>
             <g v-html="innercode"></g>
        </svg>    
    </div>
</template>

<script>
import { SVG, Container, extend } from '@svgdotjs/svg.js'
import widget from "../widget/widget.js"
import keygen from "../keygen.js"
import svgjsblob from "../blob.js";

export default {
    data() {
        return {
            innercode: '',
            key: null,
            SVG: null
        }
    },
    mounted() {
        if(!this.key) {
            this.refresh(keygen.getKeyParams(""))
        }
    },
    methods: {
        
        refresh(key) {
            //console.log(key);
            this.key = key
            extend(Container, svgjsblob)
            let draw = SVG().viewbox(0, 0, 1000, 1000)
            //draw.rect().attr({ x: 0, y: 0, width: 1000, height: 1000, stroke: 'blue', "fill-opacity": 0 })
            widget(key,draw)
            this.innercode = draw.svg()
        },

        codeChange(code) {
            console.log("code",code);
            this.innercode = code
        }
    },
}
</script>
<style lang="">

</style>../widget/widget03.js