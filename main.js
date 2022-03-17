const text= document.querySelector('.texts');
const seccion1 = document.getElementById("seccion1");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const seccion4 = document.getElementById("seccion4");
const seccion5 = document.getElementById("seccion5");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{ 
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
console.log(text);
if(e.results[0].isFinal){
    if (text.includes('Enciende primer foco') || text.includes('enciende primer foco'))
    seccion1.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apaga primer foco') || text.includes('apaga primer foco'))
    seccion1.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Enciende segundo foco') || text.includes('enciende segundo foco'))
    seccion2.style.background = "url(bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Apaga segundo foco') || text.includes('apaga segundo foco'))
    seccion2.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Enciende tercer foco') || text.includes('enciende tercer foco'))
    seccion3.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apaga tercer foco') || text.includes('apaga tercer foco'))
    seccion3.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Enciende cuarto foco') || text.includes('enciende cuarto foco'))
    seccion4.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apaga cuarto foco') || text.includes('apaga cuarto foco'))
    seccion4.style.background = "url(bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Enciende quinto foco') || text.includes('enciende quinto foco'))
    seccion5.style.background = "url(bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Apaga quinto foco') || text.includes('apaga quinto foco'))
    seccion5.style.background = "url(bulb_off.jpg)";
} 
});

recognition.addEventListener('end', ()=>{
    recognition.start();
});

recognition.start();
  