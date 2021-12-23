
var app = new Vue({
    el: "main",
    data: { //Tudo o que eu for exibir no front
        vencido_tratativa: []
    },
    mounted() { //Ciclo de vida de um componente VueJS (Pesquisar no Google)
        this.buscarDados()
    },
    methods: {
        async buscarDados() { //ESTE CÓDIGO ME RETORNA A ESTRUTURA DA API NO CONSOLE
            this.vencido_tratativa = await fetch('http://localhost:4567').then(response => response.json())
            console.log(this.vencido_tratativa)
        }
    }
})