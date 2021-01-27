Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
          ref='input'
        >
        <button ref='btn' @click='focus'>ff</button>
      </label>
    `,
    methods:{
        focus : function(){
            this.$refs.input.focus();
            this.$refs.btn.innerText = 'fuck you'
        }
    }
  })