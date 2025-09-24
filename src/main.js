import './style.css'

const layout = document.querySelector('.page-layout');

const leftPanelToggler = document.getElementById('left-panel-toggler');
leftPanelToggler.addEventListener('click', e => {
    layout.classList.toggle('left-panel-hidden');
});

const rightPanelToggler = document.getElementById('right-panel-toggler');
rightPanelToggler.addEventListener('click', e => {
    layout.classList.toggle('right-panel-hidden');
});
