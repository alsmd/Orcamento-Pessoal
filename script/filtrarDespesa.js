



(function(){
    'use strict'

    let btn = document.querySelector("#btnFiltrar");
    btn.addEventListener('click',pesquisarDespesa)

    function pesquisarDespesa(){
        let ano = document.querySelector("#ano").value;
        let mes = document.querySelector("#mes").value;
        let dia = document.querySelector("#dia").value;
        let tipo =document.querySelector("#tipo").value
        let descricao = document.querySelector("#descricao").value;
        let valor = document.querySelector("#valor").value;
        let bd = new dataBase()
        let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor);
        let despesasFiltradas = bd.pesquisar(despesa)
        bd.mostrarDespesas(despesasFiltradas);

    }



})()