
(function(){
    'use strict'
    class Despesa{
        constructor(ano,mes,dia,tipo,descricao,valor){
            this.ano = ano;
            this.mes = mes;
            this.dia = dia;
            this.tipo = tipo;
            this.descricao = descricao;
            this.valor = valor;
        }


    }
    class Bd {

        constructor(){
            let id = localStorage.getItem('id')

            if(id === null){
                localStorage.setItem('id',0)
            }
            
        }


        getNextId() {
            let proximoId = localStorage.getItem("id")
            return parseInt(proximoId) + 1
        }

        gravar(d){
            let id = this.getNextId()
            localStorage.setItem(id,JSON.stringify(d))

            localStorage.setItem('id',id)
        }
    }

    let bd = new Bd();


    let btn = document.querySelector("#btn");
    btn.addEventListener('click',cadastrarDespesa)

    function cadastrarDespesa(){
        let ano = document.querySelector("#ano");
        let mes = document.querySelector("#mes");
        let dia = document.querySelector("#dia");
        let tipo = document.querySelector("#tipo");
        let descricao = document.querySelector("#descricao");
        let valor = document.querySelector("#valor");
        let despesa = new Despesa(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value);
        
        bd.gravar(despesa);
    }




})()