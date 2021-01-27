Vue.component('slot-demo', {
    data: function () {
        return {
            bitch1:'maxx'
        }
    },
    template: `<div>
    <slot></slot>
    </div>`
})