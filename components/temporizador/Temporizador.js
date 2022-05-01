import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import emergentCardTraduction from "../emergentCard/emergentCardTraduction.js";
const d = document;

export const Temporizador = (time,lan)=>{
    let staticTime = time,  
    clockInterval;
    
    clockInterval = setInterval(() => {
                
        let min = Math.floor(staticTime%(1000*60*60)/(1000*60)),
        sec = Math.floor(staticTime%(1000*60)/1000);
        
        //para que no se ejecute el temporizador fuera del componente (para desenganchar el temporizador y no de error)
        if (d.querySelector(".clock")){
            d.querySelector(".clock").innerHTML = `<p>0${min}:${(sec<10) ?`0${sec}` :sec}</p>`
            staticTime = staticTime - 1000;
        }else{
            clearInterval(clockInterval);
        }
        

        if(staticTime<15000){
            d.querySelector(".clock").className = "clock red";
        }else if(staticTime<30000){
            d.querySelector(".clock").className = "clock orange";
        };

        if (d.querySelector(".card .emergent-card")){
            clearInterval(clockInterval);
        }else if(staticTime<0){
            clearInterval(clockInterval);  
            EmergentCard(0,0);
            userInfoMod(0,0);
            d.querySelector(".emergent-card .card-hero").innerHTML = emergentCardTraduction[lan].hero_title_timeover;
        };

    }, 1000);
};
