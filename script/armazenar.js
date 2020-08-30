
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
        validarDados(){
            let validar = true;
           for(let i in this){
               if(this[i] == '' || this[i] == null || this[i] == undefined){
                    validar = false;
               }
           }
           return validar
        }

    }
    class Bd {

        constructor(){
            //recupear o valor da key id do local storage
            let id = localStorage.getItem('id')
            //se essa key não existir adicione uma de valor 0
            if(id === null){
                localStorage.setItem('id',0)
            }
            
        }


        getNextId() {
            //recupera o id de localStorage e retorna o proximo valor
            let proximoId = localStorage.getItem("id")
            return parseInt(proximoId) + 1
        }
        //sempre que um novo item for adicionado ele sera adicionado no localStorage com a key sendo o valor de ID, o valor de ID tera seu valor somado em 1, fazendo com que nunca aja uma sobreposição de objetos 
        gravar(d){
            
            let id = this.getNextId()
            localStorage.setItem(id,JSON.stringify(d))

            localStorage.setItem('id',id)
        }
    }

    let bd = new Bd();


    let btn = document.querySelector("#btn");
    btn.addEventListener('click',cadastrarDespesa)

    //recupera e armazena os dados da nova despesa
    function cadastrarDespesa(){
        let ano = document.querySelector("#ano");
        let mes = document.querySelector("#mes");
        let dia = document.querySelector("#dia");
        let tipo = document.querySelector("#tipo");
        let descricao = document.querySelector("#descricao");
        let valor = document.querySelector("#valor");
        let despesa = new Despesa(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value);

         if(despesa.validarDados()){
            bd.gravar(despesa);
            alert('Nova despesa cadastrada com sucesso');
        }else{
            alert('Porfavor preencher todos os dados');
        }


    }




})()