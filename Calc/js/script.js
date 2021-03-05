'use strict';

const inputEur = document.querySelector('#eur'),
      inputUsd = document.querySelector('#usd'),
      inputRub = document.querySelector('#rub'),
      inputTry = document.querySelector('#try'),
      inputCny = document.querySelector('#cny'),
      inputGbp = document.querySelector('#gbp');
     
      inputEur.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
    if (request.status === 200) {
    const data = JSON.parse(request.response);
    inputUsd.value = (+inputEur.value * data.current.usd).toFixed(2);
    inputRub.value = (+inputEur.value * data.current.rub).toFixed(2);
    inputTry.value = (+inputEur.value * data.current.try).toFixed(2);
    inputCny.value = (+inputEur.value * data.current.cny).toFixed(2);
    inputGbp.value = (+inputEur.value * data.current.gbp).toFixed(2);
        } else {
    inputUsd.value = "Что-то пошло не так";
            inputRub.value = "Что-то пошло не так";
    }
    });    
});


