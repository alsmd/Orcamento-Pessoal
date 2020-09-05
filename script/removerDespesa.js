 (function (){
    'use strict'



    //Logica adiona um evento em toda a tabela e caso o lugar que foi clickado for um botão, a função ira  buscar o TR mais proximo e deletalo, assim como o dado no localStorage que possui a chave como sendo o mesmo valor que a classe do tr
    let tabela = document.querySelector("#tabela");
    let db = new dataBase();
    tabela.addEventListener("click",remover);
    function remover(e){
        if(e.target.nodeName == 'BUTTON'){

            let item = e.target.closest('tr');
            let id = item.className;
            db.remover(id);
            item.remove();
            modalContent('text-success','btn-success','Voltar','Success','Despesa removida com sucesso');
        }
    }
 }) ();