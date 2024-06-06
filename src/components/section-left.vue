<template>
    <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div class="flex items-center justify-between">
            <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                Digite um identificador
            </h1>
            <button @click="random"
                class="ml-3 inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white text-base mt-4 md:mt-0">
                random
                <Icon icon="mdi:arrow-right" class="ml-1 text-2xl" />
            </button>
        </div>
        <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input @keyup="updateID" v-model="id" type="text" id="hero-field" name="hero-field"
                    class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
        </div>
        <div class="my-4 border rounded p-2 shadow">
            <div v-if="key">
                <div class="border rounded my-1 flex items-center gap-2 bg-gray-200">
                    <div class="bg-gray-100 px-1 text-black rounded font-semibold py-1">key</div>
                    <div class="py-1 font-bold text-base">{{ key.hash }}</div>
                </div>
                <div class="grid grid-cols-4 gap-3 p-2">
                    <div v-for="(elem, idx) in key.params" class="border rounded px-1">
                        <div class="flex items-center gap-1">
                            <div class="bg-teal-600 px-1 text-white text-xs">
                                {{ idx < 10 ? "0" + idx : idx }} </div>
                                    <div class="text-[7pt] bg-gray-300 p-0.5 rounded">HEX</div>
                                    <div>{{ elem.hex }}</div>
                                    <div class="text-[7pt] bg-gray-600 text-white p-0.5 rounded">DEC</div>
                                    <div>{{ elem.dec }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <btn_links />
        </div>
</template>

<script>
import ButtonsLinks from "./buttons-links.vue";
import btn_links from "./buttons-links.vue"
import keygen from "../keygen.js"

export default {
    components: { btn_links },
    data() {
        return {
            key: null,
            id: ""
        }
    },
    mounted() {
        //this.key = keygen.getKeyParams("oi gente")
        this.updateID()
    },
    methods: {

        updateID() {
            this.key = keygen.getKeyParams(this.id)
            this.$emit('keyChanged', this.key)
        },

        random() {
            let rnd = keygen.rnd16()
            console.log("rnd",rnd);
            let rnd256 = keygen.rnd256()
            console.log("rnd256",rnd256);
            
        }

    },
}
</script>
<style lang="">

</style>../keygen.js