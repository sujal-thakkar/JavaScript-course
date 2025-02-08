// 2
const testBtn = document.querySelector('.js-button');
function isClassPresent(className) {
    if(testBtn.classList.contains(className)) console.log('Class is present');
    else console.log('Class isn\'t present');
}

// 3
const gamingBtn = document.querySelector('.gaming-btn');
const musicBtn = document.querySelector('.music-btn');
const techBtn = document.querySelector('.tech-btn');
function toggle(button) {
    if(!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    }
    else button.classList.remove('is-toggled');
}

// 4
const cricketBtn = document.querySelector('.cricket-btn')
const devotionalBtn = document.querySelector('.devotional-btn')
const softwareBtn = document.querySelector('.software-btn')

function selectToggled(button) {
    if(!button.classList.contains('is-toggled-dark')) {
        if(button === cricketBtn) {
            devotionalBtn.classList.remove('is-toggled-dark');
            softwareBtn.classList.remove('is-toggled-dark');
            cricketBtn.classList.add('is-toggled-dark');
        }
        else if(button === devotionalBtn) {
            cricketBtn.classList.remove('is-toggled-dark');
            softwareBtn.classList.remove('is-toggled-dark');
            devotionalBtn.classList.add('is-toggled-dark');
        }
        else {
            devotionalBtn.classList.remove('is-toggled-dark');
            cricketBtn.classList.remove('is-toggled-dark');
            softwareBtn.classList.add('is-toggled-dark');
        }
    }
    else button.classList.remove('is-toggled-dark');
}
