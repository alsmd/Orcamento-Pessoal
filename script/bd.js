class dataBase{

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
    recuperarTodosRegistros(){
        let dispesas = [];
        for(let x = 1;x <= localStorage.getItem('id');x++){
            let dispesa = JSON.parse(localStorage.getItem(x))
            if(dispesa != null){
                dispesas.push(dispesa);
            }
            
        }
        return dispesas;
    }
}


