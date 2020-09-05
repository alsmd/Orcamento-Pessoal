let bd = new dataBase();

let despesas = bd.recuperarTodosRegistros();

let Janeiro = 0;
let Fevereiro = 0;
let Março = 0;
let Abriu = 0;
let Maio = 0;
let junho = 0;
let Julho = 0;
let Agosto = 0;
let Setembro = 0;
let Outubro = 0;
let Novembro = 0;
let Dezembro = 0;

despesas.forEach(obj => {
    let mes;
    let valor;
    for(let attr in obj){
        if(attr == 'mes'){
            verificarMes(obj[attr],parseFloat(obj.valor))
        }

    }

})

function verificarMes(mes,valor){

    switch(mes){
        case '1':
            Janeiro += valor;
            break
        case '2':
            Fevereiro += valor;

            break
        case '3':
            Março += valor;

            break
        case '4':
            Abriu += valor;

            break
        case '5':
            Maio += valor;

            break
        case '6':
            junho += valor;

            break
        case '7':
            Julho += valor;

            break
        case '8':
            Agosto += valor;

            break
        case '9':
            Setembro += valor;

            break
        case '10':
            Outubro += valor;

            break
        case '11':
            Novembro += valor;

            break
        case '12':
            Dezembro += valor;

            break
    }



}