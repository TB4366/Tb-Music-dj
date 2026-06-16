const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioB");

let cueA = 0;
let cueB = 0;

function load(deck){

const file =
document.getElementById(
"file"+deck
).files[0];

if(!file) return;

const url =
URL.createObjectURL(file);

document.getElementById(
"audio"+deck
).src = url;
}

fileA.onchange=()=>load("A");
fileB.onchange=()=>load("B");

playA.onclick=()=>{
audioA.play();
jogA.style.animationPlayState="running";
};

pauseA.onclick=()=>{
audioA.pause();
jogA.style.animationPlayState="paused";
};

playB.onclick=()=>{
audioB.play();
jogB.style.animationPlayState="running";
};

pauseB.onclick=()=>{
audioB.pause();
jogB.style.animationPlayState="paused";
};

cueA.onclick=()=>{
cueA = audioA.currentTime;
};

cueB.onclick=()=>{
cueB = audioB.currentTime;
};

loopA.onclick=()=>{
audioA.loop=!audioA.loop;
};

loopB.onclick=()=>{
audioB.loop=!audioB.loop;
};

pitchA.oninput=()=>{
audioA.playbackRate=
pitchA.value;
};

pitchB.oninput=()=>{
audioB.playbackRate=
pitchB.value;
};

volA.oninput=()=>{
audioA.volume=
volA.value;
};

volB.oninput=()=>{
audioB.volume=
volB.value;
};

cross.oninput=()=>{

let x =
cross.value/100;

audioA.volume =
1-x;

audioB.volume =
x;
};
