new Vue({
    el: '#app',
    data() {
        return {
            titulo: "Minhas tarefas",
            tarefas: [
            ],
            novaTarefa: ''
        }
    },
    methods: {
        adicionarTarefa() {
            this.tarefas.push({
                titulo: this.novaTarefa, checked: false
            })
            this.novaTarefa = ''
        }
    },
    computed: {
        totalTarefas() {
            return this.tarefas.length
        },
        totalTarefasConcluidas() {
            const concluidas = this.tarefas.filter(tarefa => tarefa.checked)
            return concluidas.length
        }
    }
})