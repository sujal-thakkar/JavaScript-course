function subscribe() {
    const subBtnElem = document.body.querySelector('.js-sub-btn');
    if (subBtnElem.innerText === 'Subscribe') {
        subBtnElem.innerText = 'Subscribed';
        subBtnElem.classList.add('is-subscribed');
        // subBtnElem.style.backgroundColor = '#f0f0f0';
        // subBtnElem.style.color = '#000';
    } else {
        subBtnElem.innerText = 'Subscribe';
        subBtnElem.classList.remove('is-subscribed');
        // subBtnElem.style.backgroundColor = '#000';
        // subBtnElem.style.color = '#fff';
    }
}

function calculateCost() {
    const orderCost = document.body.querySelector('.js-order-cost');

    const totalCost = document.body.querySelector('.js-total-cost');

    const orderCostNum = Number(orderCost.value) * 100;

    if (orderCostNum < 0) {
        totalCost.innerText = `Error: cost cannot be less than $0`;
        totalCost.classList.add('error-msg');
    }
    else if (orderCostNum < 40 * 100) {
        totalCost.classList.remove('error-msg');
        totalCost.innerText = `$${(orderCostNum + 1000) / 100}`;
    } 
    else {
        totalCost.classList.remove('error-msg');
        totalCost.innerText = `$${orderCostNum / 100}`;
    }
} 