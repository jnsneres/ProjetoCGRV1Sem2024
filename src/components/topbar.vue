<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img class="w-40" src="/logo.png" />
      </a>
      <button
        class="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white text-base mt-4 md:mt-0">
        svguid
        <Icon icon="mdi:github" class="ml-1 text-2xl" />
      </button>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      btn_select: "genid"
    }
  },
  methods: {
    
  },
}
</script>
<style lang="">

</style>