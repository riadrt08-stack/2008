function build(){

let dream=dreamInput().value;
let goals=goalsInput().value;
let quote=quoteInput().value;
let target=document.getElementById("target").value;

if(dream==""||goals==""||quote==""||target==""){
alert("املأ كل الخانات 🙂");
return;
}

localStorage.setItem("dream",dream);
localStorage.setItem("goals",goals);
localStorage.setItem("quote",quote);
localStorage.setItem("target",target);

showResult();
document.getElementById("song").play();
}

function showResult(){

document.getElementById("form").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("d").innerText=localStorage.getItem("dream");
document.getElementById("g").innerText=localStorage.getItem("goals");
document.getElementById("q").innerText=localStorage.getItem("quote");

let target=new Date(localStorage.getItem("target"));
let today=new Date();
let diff=Math.ceil((target-today)/(1000*60*60*24));

document.getElementById("days").innerText="🚀 باقي "+diff+" يوم لتحقيق حلمي";
}

function share(){
navigator.share({
title:"حلمي ✨",
text:"ده حلمي!",
url:location.href
});
}

function dreamInput(){return document.getElementById("dream")}
function goalsInput(){return document.getElementById("goals")}
function quoteInput(){return document.getElementById("quote")}

window.onload=()=>{
if(localStorage.getItem("dream")){
showResult();
}
}

function resetDream(){
  localStorage.removeItem("dream");
  localStorage.removeItem("goals");
  localStorage.removeItem("quote");
  localStorage.removeItem("target");
  location.reload();
}