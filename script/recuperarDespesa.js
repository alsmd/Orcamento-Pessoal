


(function(){
    'use strict'

    let bd = new dataBase();
    let dispesas = bd.recuperarTodosRegistros();
    inserirItensNaTabela(dispesas)

})()