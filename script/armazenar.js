
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
    let bd = new dataBase();

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
            let a = ['ano','mes','dia','tipo','descricao','valor']
            bd.gravar(despesa);
            for(let i in a ){
                document.getElementById(a[i]).value = ''
            }
            
            modalContent('text-success','btn-success','Voltar','Success','Despesa cadastrada com sucesso');
        }else{
            modalContent('text-danger','btn-danger','Voltar e corrigir','Error','Existem campos obrigatorios que não foram preenchidos.');
        } 


    }

    function modalContent(tituloCor,btnCor,btnContent,tituloContent,Content){
        let modalTituloCor = document.querySelector("#modalTituloCor");
        let modalTitulo = document.querySelector("#modalTitulo");
        let modalConteudo = document.querySelector("#modalConteudo");
        let modalBtn = document.querySelector("#modalBtn");

        modalTituloCor.className = tituloCor + ' modal-header';
        modalBtn.className = btnCor + ' btn';
        modalBtn.textContent = btnContent;

        modalTitulo.innerHTML = tituloContent;
        modalConteudo.textContent = Content;
        $("#modalRegistraDespesa").modal('show');
    }
    

})()