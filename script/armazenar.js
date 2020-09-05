
(function(){
    'use strict'

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
            //formataçoes e visualização do modal
            modalContent('text-success','btn-success','Voltar','Success','Despesa cadastrada com sucesso');
        }else{
            modalContent('text-danger','btn-danger','Voltar e corrigir','Error','Existem campos obrigatorios que não foram preenchidos.');
        } 


    }

    
    

})()