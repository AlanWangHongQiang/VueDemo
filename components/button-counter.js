Vue.component('button-counter',{
    props:['title'],
    data:function(){
        return {
            count : 0
        }
    },
    template : "<button @click='count++'>you click me {{count}} times , my title is {{title}}</button>"
})