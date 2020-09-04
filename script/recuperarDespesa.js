


(function(){
    'use strict'

    let bd = new dataBase();
    let dispesas = bd.recuperarTodosRegistros();
    let tabela = document.querySelector("#tabela tbody")
   
    
    dispesas.forEach(function(d){
        let row = tabela.insertRow();
        let btn = document.createElement("button");
        btn.innerHTML = 'X'
        btn.className = 'btn btn-danger'
        row.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;
        row.insertCell(1).innerHTML = converterTipo(d.tipo);
        row.insertCell(2).innerHTML = d.descricao;
        row.insertCell(3).innerHTML = d.valor;
        row.insertCell(4).appendChild(btn);

        row.className = d.id;

    })
    
    



})()