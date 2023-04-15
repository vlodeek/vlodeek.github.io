var timeNmt1= new Date(2023,5,5);
var timeNmt2= new Date(2023,6,11);

document.getElementById('nmt1').innerHTML=""
document.getElementById('nmt2').innerHTML=""


if(timeNmt1.getDate() < 10) document.getElementById('nmt1').innerHTML+="0"+timeNmt1.getDate()+"."
else document.getElementById('nmt1').innerHTML+=timeNmt1.getDate()+"."

if(timeNmt1.getMonth() < 10) document.getElementById('nmt1').innerHTML+="0"+(timeNmt1.getMonth()+1)+"."
else document.getElementById('nmt1').innerHTML+=(timeNmt1.getMonth()+1)+"."

document.getElementById('nmt1').innerHTML+=timeNmt1.getFullYear()

//

if(timeNmt2.getDate() < 10) document.getElementById('nmt2').innerHTML+="0"+timeNmt2.getDate()+"."
else document.getElementById('nmt2').innerHTML+=timeNmt2.getDate()+"."

if(timeNmt2.getMonth() < 10) document.getElementById('nmt2').innerHTML+="0"+(timeNmt2.getMonth()+1)+"."
else document.getElementById('nmt2').innerHTML+=(timeNmt2.getMonth()+1)+"."

document.getElementById('nmt2').innerHTML+=timeNmt2.getFullYear()

function timer1() {
    today = new Date();
    today = Math.floor((timeNmt1-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" днів "+ thour+" годин "+tmin+" хвилин "+tsec+" секунд";
    document.getElementById('t1').innerHTML=timestr;
    window.setTimeout("timer1()",1000);
}
function timer2() {
    today = new Date();
    today = Math.floor((timeNmt2-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" днів "+ thour+" годин "+tmin+" хвилин "+tsec+" секунд";
    document.getElementById('t2').innerHTML=timestr;
    window.setTimeout("timer2()",1000);
}