 (function (){
    'use strict'

    let tabela = document.querySelector("#tabela");
    tabela.addEventListener("click",remover)
    function remover(e){
        if(e.target.nodeName == 'BUTTON'){

            let item = e.target.closest('tr');
            let id = item.className;
            localStorage.removeItem(id)
            console.log(id)
            item.remove()
 

        }


    }




 }) ();