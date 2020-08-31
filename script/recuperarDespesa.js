


(function(){
    'use strict'

    let bd = new dataBase();
    let dispesas = bd.recuperarTodosRegistros();
    let tabela = document.querySelector("#tabela tbody")
    
    for(let x = 0; dispesas[x]; x++){
        let row = document.createElement("tr");
        row.appendChild(newTd(`${dispesas[x].dia}/${dispesas[x].mes}/${dispesas[x].ano}`))
        row.appendChild(newTd(converterTipo(dispesas[x].tipo)))
        row.appendChild(newTd(dispesas[x].descricao))
        row.appendChild(newTd(dispesas[x].valor))
        tabela.appendChild(row);
    }
    
    function newTd(content){
        let td = document.createElement("td");
        td.innerHTML = content
        return td
    }
    function converterTipo(tipo){
        let x;
        switch(tipo){
            case '1':
                x = 'Alimentação'
                break
            case '2':
                x ='Educação'
                break
            case '3':
                x ='Lazer'
            break
            case '4':
                x ='Saúde'
            break
            case '5':
                x ='Transporte'
            
        }
        return x
    }



})()