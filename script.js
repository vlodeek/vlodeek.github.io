var t = new Date()
var timeNmt1= new Date(2023,6,5);
var timeNmt2= new Date(2023,7,11);
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