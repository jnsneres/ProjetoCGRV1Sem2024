<template>
    <div class="md:w-80">
        <!-- <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/400x400"> -->
        <div v-html="svgData">

        </div>
    </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import widget from "../widget/widget.js"

export default {
    data() {
        return {
            svgData: ''    
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        
        load() {
            //this.refresh()
        },

        refresh(key) {
            let draw = SVG().viewbox(0, 0, 1000, 1000)
            draw.rect().attr({ x: 0, y: 0, width: 1000, height: 1000, stroke: 'blue', "fill-opacity": 0 })
            widget(key,draw)
            this.svgData = draw.svg()
        }

    },
}
</script>
<style lang="">

</style>