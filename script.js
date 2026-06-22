const text='Cloud • Linux • AWS • Python • DevOps';
const el=document.querySelector('.terminal-text');
let i=0;
function type(){if(i<text.length){el.innerHTML='$ '+text.slice(0,i+1);i++;setTimeout(type,80);}}
window.onload=type;