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
        d.id = id;
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
    pesquisar(despesa){
        let despesasFiltradas = this.recuperarTodosRegistros()
        //ano
        filtrar('ano');
        //mes
        filtrar('mes');
        //tipo
        filtrar('tipo');
        //descricao
        filtrar('descricao');
        //valor 
        filtrar('valor');
        console.log(despesasFiltradas)
        function filtrar(attr){
            if(despesa[attr] != ''){
                despesasFiltradas = despesasFiltradas.filter(d => d[attr] == despesa[attr])
            }
        }
    }
}


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