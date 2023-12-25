const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const dateE1=document.getElementById("date");
const monthE1=document.getElementById("month");
const yearE1=document.getElementById("year");
const ampmE1=document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let d=new Date().getDate();
    let mth=new Date().getMonth();
    let y=new Date().getFullYear();
    let ampm="AM";

    if (h>12) {
        h=h-12
        ampm="PM"
    }

    if (h<10) {
        h="0"+h
    } else {
        h=h
    }

    if (m<10) {
        m="0"+m
    } else {
        m=m
    }

    if (s<10) {
        s="0"+s
    } else {
        s=s
    }


    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    dateE1.innerText=d;
    monthE1.innerText=mth;
    yearE1.innerText=y;
    ampmE1.innerText=ampm;
    setTimeout(()=> updateClock(),1000)
}

updateClock();
