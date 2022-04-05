import { EmergentCard } from "../emergentCard/EmergentCard.js";
const d = document;

export const Temporizador = (time)=>{
    let staticTime = time,  
    clockInterval;
    
    clockInterval = setInterval(() => {
                
        let min = Math.floor(staticTime%(1000*60*60)/(1000*60)),
        sec = Math.floor(staticTime%(1000*60)/1000);

        d.querySelector(".clock").innerHTML = `<p>0${min}:${(sec<10) ?`0${sec}` :sec}</p>`
        staticTime = staticTime - 1000;

        if(staticTime<15000){
            d.querySelector(".clock").className = "clock red";
        }else if(staticTime<30000){
            d.querySelector(".clock").className = "clock orange";
        };

        /* if (d.querySelector(".card .emergent-card")){
            clearInterval(clockInterval);            
        }else if(staticTime<0){
            clearInterval(clockInterval);  
            EmergentCard("TIME OVER")
        }; */

    }, 1000);
};
