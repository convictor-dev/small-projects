document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            document.getElementById('theme-text').innerText = 'Modo Escuro';
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            document.getElementById('theme-text').innerText = 'Modo Claro';
        }
    });

    // Inicializa o tema
    if (localStorage.getItem('theme') === 'dark') {
        themeToggle.checked = true;
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        document.getElementById('theme-text').innerText = 'Modo Escuro';
    } else {
        body.classList.add('light-mode');
        document.getElementById('theme-text').innerText = 'Modo Claro';
    }

    // Salva o tema no localStorage
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});


const displayDate = document.querySelector('.display-date');
const today = new Date();
const todayBrazil = today.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});
displayDate.innerHTML = `Hoje é: <span>${todayBrazil}<span>`;

const inputDate = document.getElementById('date');
const Result = document.querySelector('.display-result');
let message;
inputDate.addEventListener('change', function () {
    const selectDate = new Date(inputDate.value + 'T00:00:00');
    const dateBrazil = selectDate.toLocaleString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    const differenceTime = selectDate - today;
    const differenceDay = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));

    if (differenceTime > 0){
        message = `Faltam <span>${differenceDay}</span> dia(s) para a data selecionada.`
    }else if (differenceTime < 0){
        message = `Já se passarm <span>${Math.abs(differenceDay)}</span> dia(s) desde a data selecionada`
    }

    Result.innerHTML = `<p>Data selecionada: <span>${dateBrazil}.</span></p><p>${message}</p>`;
});
