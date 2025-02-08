let calculation = localStorage.getItem('calculation') || '';

const calculationPara = document.querySelector('.js-calculation');
calculationPara.innerHTML = calculation;

function updateCalculation(calculation, operation) {
    calculation += operation;
    calculationPara.innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
    return calculation;
}

function evalCalculation(calculation) {
    calculation = eval(calculation);
    calculationPara.innerHTML = calculation;
    return calculation;
}

function clearCalculation(claculation) {
    calculation = '';
    localStorage.removeItem('calculation');
    calculationPara.innerHTML = '0';
    return calculation;
}