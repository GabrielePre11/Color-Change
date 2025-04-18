// Remote Control

// Controls
const remoteCtrl = document.querySelector('[data-control]');
const turnOff = document.querySelector('.turn-off-btn');
const turnOn = document.querySelector('.turn-on-btn');

// Events
turnOff.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000';
});

turnOn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
});

// Colors
const btns = document.querySelectorAll('button');

// Interval for FLASH
let interval;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnColor = btn.dataset.color;
        document.body.style.backgroundColor = btnColor;
        clearInterval(interval);

        const ctrlBtn = btn.dataset.ctrl;

        if (ctrlBtn == 'flash') {

            const colors = ['red', 'blue', 'green', '#cb770e', '#3ecb0e', '#0e76cb', '#ddb50c', '#12dd94', '#8c15ee', '##f6b00a', '#066d84', '#cf0ed8', '#e7ed0c', '#034557', '#d66aea'];

            interval = setInterval(() => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                document.body.style.backgroundColor = randomColor;
            }, 500);
        }
    });
});