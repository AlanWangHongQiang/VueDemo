var data = {
    message: 'Hello Vue',
    birthday: '',
    title: 'Page load on ' + new Date().toLocaleTimeString(),
    isActive : true,
    divColor : 'red',
    parentMessage : 'Parent',
    job:{
        jobMessage : 'Job Mesage',
        jobList : [
            {message:'job1',index : '2'},
            {message:'job2',index : '3'}
        ]
    },
    items : [
        {message:'item1'},
        {message:'item2'}
    ],
    numberList : [1,2,3,4,5],
    checked : true,
    checkNames : [],
    selected : 'D',
    toggle : '',
    age : '20',
    username:'',
    bitch : 'mxx'
    
}
var vm = {}
window.addEventListener("load", function () {

    vm = new Vue({
        el: "#app",
        data: data,
        computed:{
            evenNumber : function(){
                return this.numberList.filter(function(item){
                    return item % 2 === 0
                })
            }
        },
        methods:{
            warn : function(message,event){
                console.log(event)
                if(event){
                    event.preventDefault()
                }
                alert(message)
            },
            getRef : function(){
                this.$refs.usernameInput.focus();
            }
        }
    })
})
