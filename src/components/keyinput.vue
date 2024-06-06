<template>
    <div class="flex items-center justify-center">
        <div class="flex items-center justify-between">
            <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                Digite um identificador
            </h1>
        </div>
        <div class="w-full flex items-center justify-center gap-2">
            <div class="">
                <input @keyup="updateID" v-model="id" type="text" id="hero-field" name="hero-field"
                    class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div>
                <q-btn round size="sm" class="bg-gray-300" @click="keyView">
                    <Icon icon="mdi:key" class="text-base"/>
                </q-btn>
            </div>
        </div>
        <dialog_params ref="dialog_params_ref"/>
    </div>
</template>

<script>
import keygen from "../keygen.js"
import dialog_params from "./dialog-params.vue"

export default {
    components: { dialog_params },
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
            //console.log("this.key",this.key); 
        },

        random() {
            let rnd = keygen.rnd16()
            console.log("rnd", rnd);
            let rnd256 = keygen.rnd256()
            console.log("rnd256", rnd256);

        },

        keyView() {
            this.$refs.dialog_params_ref.show(this.key)
        }

    },
}
</script>
<style lang="">

</style>../keygen.js