const date = new Date();
// Função para formatar date em pt-br.
function dateFormat(date){
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth());
    const year = addZero(date.getFullYear());
    return `${day}/${month}/${year}`;
}
// Função para adicionar zero em números menores do que 10.
function addZero(num){
    return num >= 10 ? num : `0${num}`;
}

const dateBrazil = dateFormat(date);
console.log('-'.repeat(20));
console.log(dateBrazil);
console.log('-'.repeat(20));