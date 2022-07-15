"use strict";
const btnHorloge = document.querySelector("#horloge");
const main = document.querySelector('main');
let divH, divM, divS, divP, divClock, interval;
btnHorloge.addEventListener("pointerdown", horloge);

//création de l'horloge dans le main
function horloge(){
    if(main.querySelector(".clock")){
        return;
    }
    main.innerHTML = "";
    // ici les div
    divH = document.createElement("div");
    divM = document.createElement("div");
    divS = document.createElement("div");
    divP = document.createElement("div");
    divClock = document.createElement("div");
    // les class
    divH.classList.add("hour");
    divM.classList.add("minute");
    divS.classList.add("second");
    divP.classList.add("pivot");
    divClock.classList.add("clock");
    // on affile les enfants au parent 
    divClock.append(divH,divM,divS,divP);
    main.append(divClock);
    interval = setInterval(ticHorloge, 1000);
}
// fonction pour la trotteuse 
function ticHorloge(){
    let h,m,s, time;
    // On récupère l'heure actuelle.
    time = new Date();
    // On défini l'angle de chaque aiguille.
    h = time.getHours()*30-90;
    m = time.getMinutes()*6-90;
    s = time.getSeconds()*6-90;
    // on fait tourné les aiguille
    divH.style.transform = `rotate(${h}deg)`;
    divM.style.transform = `rotate(${m}deg)`;
    divS.style.transform = `rotate(${s}deg)`;
}