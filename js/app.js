const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
    }
    },
    methods:{
        fetch(n){
            for (let i = 0; i < n; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                console.log(res.data.response)
                this.emails.push(res.data.response)
                })
            }
        }
    },
    created(){
        this.fetch(10)
    }
}).mount('#app')

  