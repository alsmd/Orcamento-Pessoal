class dataBase{

    constructor(){
        //recupear o valor da key id do local storage
        let id = localStorage.getItem('id');
        //se essa key não existir adicione uma de valor 0
        if(id === null){
            localStorage.setItem('id',0);
        }
        
    }


    getNextId() {
        //recupera o id de localStorage e retorna o proximo valor
        let proximoId = localStorage.getItem("id");
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
            if(dispesa != null && dispesa != undefined){
                dispesas.push(dispesa);
            }
            
        }
        return dispesas;
    }
    pesquisar(despesa){
        let despesasFiltradas = this.recuperarTodosRegistros()

        for(let i in despesa){
            filtrar(i);
        }

        console.log(despesasFiltradas)
        function filtrar(attr){
            if(attr == 'descricao' && despesa[attr] != ''){ 
                let filtro = despesa[attr].toLowerCase();
                despesasFiltradas = despesasFiltradas.filter(d =>  d[attr].toLowerCase() == filtro )
            }else if(despesa[attr] != '' && attr != 'descricao' ){
                despesasFiltradas = despesasFiltradas.filter(d => d[attr] == despesa[attr])
            }            
        }
        return despesasFiltradas;
    }
    mostrarDespesas(dispesas){
        document.querySelector("#tabela tbody").innerHTML = '';
        inserirItensNaTabela(dispesas)
    }
    remover(id){
        localStorage.removeItem(id);
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


function inserirItensNaTabela(despesas){
    despesas.forEach(function(d){
        let tabelaTbody = document.querySelector("#tabela tbody");
        let row = tabelaTbody.insertRow();
        let btn = document.createElement("button");
        btn.className = 'btn btn-danger';
        btn.innerHTML = 'X';
        row.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;
        row.insertCell(1).innerHTML = converterTipo(d.tipo);
        row.insertCell(2).innerHTML = d.descricao;
        row.insertCell(3).innerHTML = d.valor;
        row.insertCell(4).appendChild(btn);

        row.className = d.id;

    })
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