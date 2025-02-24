const calculate = document.getElementById('calculate');
const hidden = document.getElementById('hidden');
const resultElement = document.getElementById('result');

function verification(event) {
    event.preventDefault()
    const weightInput = document.getElementById('weight').value;
    let heightInput = document.getElementById('height').value;

    if(heightInput >= 10 && heightInput <= 99){
        heightInput = heightInput / 10;
    }
    if(heightInput >= 100 && heightInput <= 999){
        heightInput = heightInput / 100;
    }

    if (weightInput === '' && heightInput === ''){
        hidden.removeAttribute('id');
        resultElement.innerHTML = `<p style="color: red;">Por favor, todos os campos precisam ser preenchidos!<p>`;
    }else if(weightInput === ''){
        hidden.removeAttribute('id');
        resultElement.innerHTML = `<p style="color: red;">É preciso inserir um valor para peso.<p>`;
    }else if(heightInput === ''){
        hidden.removeAttribute('id');
        resultElement.innerHTML = `<p style="color: red;">É preciso inserir um valor para Altura.<p>`;
    }else if(weightInput <= 20 && weightInput !== ''){
        hidden.removeAttribute('id');
        resultElement.innerHTML = `<p style="color: red;">Peso de adultos abaixo de 20kg é inválido!<p>`;
    }else if(weightInput !== '' && heightInput !== '') {
        hidden.removeAttribute('id');
        const imc = calculateIMC(parseFloat(weightInput), parseFloat(heightInput));
        displayResults(imc);
        const form = document.getElementById('form');
        form.reset();
    }
}

function calculateIMC(weight, heigth) {
    const imc = weight / (heigth ** 2);
    return imc;
}

function displayResults(imc){
    if (imc < 18.5){
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(255, 183, 0);">ATENÇÃO: Este índice é considerado abaixo do ideal.</p>`;
    }else if(imc >= 18.5 && imc < 24.9){
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(56, 142, 60);">Este índice é considerado ideal.</p>`;
    }else if(imc >= 25 && imc < 29.9){
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(255, 183, 0);">ATENÇÃO: Este índice é considerado sobrepeso.</p>`;
    }else if(imc >= 30 && imc < 34.9){
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(255, 0, 0);">CUIDADO: Este índice é considerado obesidade grau 1.</p>`;
    }else if(imc >= 35 && imc < 39.9){
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(255, 0, 0);">MUITO CUIDADO: Este índice é considerado obesidade grau 2.</p>`;
    }else{
        resultElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}.<p style="color:rgb(255, 0, 0);">SITUAÇÃO GRAVE: Este índice é considerado obesidade grau 3.</p>`;
    }
}

calculate.addEventListener('click', verification);