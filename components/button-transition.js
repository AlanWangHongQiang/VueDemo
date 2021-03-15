Vue.component("button-transition",{
    data : function(){
        return {
            show: true
          }
    },
    template : `<div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade1">
      <p v-if="show">hello</p>
    </transition>
  </div>`
})