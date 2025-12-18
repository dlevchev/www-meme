import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.mount('#app')

// Add some random glitches
setInterval(() => {
    if (Math.random() > 0.7) {
        document.body.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 100);
    }
}, 2000);

// Random screen shake
setInterval(() => {
    if (Math.random() > 0.85) {
        document.body.style.transform = 'translate(' + (Math.random() * 10 - 5) + 'px, ' + (Math.random() * 10 - 5) + 'px)';
        setTimeout(() => {
            document.body.style.transform = 'none';
        }, 100);
    }
}, 3000);

// Random cursor: not-allowed
document.addEventListener('mousemove', () => {
    if (Math.random() > 0.95) {
        document.body.style.cursor = 'not-allowed';
        setTimeout(() => {
            document.body.style.cursor = 'default';
        }, 200);
    }
});

// Console messages for the degens who open dev tools
console.log('%c$WWW - WHAT WENT WRONG', 'font-size: 40px; color: #ff00de; font-weight: bold; text-shadow: 2px 2px #00ffff;');
console.log('%cYou really thought there would be alpha in the console?', 'font-size: 16px; color: #fff;');
console.log('%cEverything is broken. Including your hopes and dreams.', 'font-size: 14px; color: #ff0000;');
console.log('%cCA: 4JMZpg1GUgTLDHmdHopDrUTyurkSR5CWdQAHkjC6m8Zf', 'font-size: 12px; color: #00ff00;');

// Random page title changes
const titles = [
    '$WWW - What Went Wrong',
    'Error - Page Not Found',
    'Are you still here?',
    'GM (gonna be miserable)',
    'WAGMI? More like WAGMI(stake)',
    'Down only',
    '$WWW - When Were We winning?',
    'Chart looking good (upside down)'
];

setInterval(() => {
    document.title = titles[Math.floor(Math.random() * titles.length)];
}, 5000);
