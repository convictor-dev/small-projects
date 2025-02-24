const date = new Date();

function dateFormat(date){
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth());
    const year = addZero(date.getFullYear());
    return `${day}/${month}/${year}`;
}

function addZero(num){
    return num >= 10 ? num : `0${num}`;
}

const dateBrazil = dateFormat(date);
console.log('-'.repeat(20));
console.log(dateBrazil);
console.log('-'.repeat(20));