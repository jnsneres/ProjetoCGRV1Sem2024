<template>
    <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

        editor

        <div class="h-[300px] border w-full">
            <vue-monaco-editor @keyup="changed" defaultLanguage="html" width="100%" height="100%" ref="editorRef" v-model:value="code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" @mount="handleMount" />
        </div> 

    </div>
</template>

<script>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

export default {
    components: { VueMonacoEditor },
    data() {
        return {
            MONACO_EDITOR_OPTIONS: {
                automaticLayout: true,
                formatOnType: true,
                formatOnPaste: true,
            },
            code: '<rect x="10" y="10" width="100" height="100" style="fill: red;"/>'
        }
    },
    methods: {
        
        handleMount(editor) {
            console.log("editorRef",this.$refs.editorRef);
            editor.getAction('editor.action.formatDocument').run()
        },

        changed() {
            //console.log(this.code);
            this.$emit("codeChange",this.code)
        }
    },
}
</script>
<style lang="">

</style>