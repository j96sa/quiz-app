const d = document;
import emergentCardTraduction from "./emergentCardTraduction.js";

export const EmergentCard = (time,score)=>{
    const LANGUAGE = localStorage.getItem("language");
    d.querySelector(".card").innerHTML = EmergentCardRenderComponent(score,LANGUAGE);
    ComponentLogic(time);
};

const EmergentCardRenderComponent = (score,lan)=>{    
    return `
        <div class="emergent-card score-${score}">            
            <h1 class="card-hero">${score!==0 ?emergentCardTraduction[lan].hero_title_ok :emergentCardTraduction[lan].hero_title_err}</h1>
            
            <section class="rank-score">
                <p  class="score-${score}">${emergentCardTraduction[lan].score}</p>
                <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </section>
            
            <section class="card-time">
                <p class="time-subtitle  score-${score}">${emergentCardTraduction[lan].time}</p>
                <p class="time"></p>
            </section>
            
            <section class="card-buttons score-${score}">
                <button class="btn-exit">${emergentCardTraduction[lan].exit}</button>
                <button class="btn-next">${emergentCardTraduction[lan].next}</button>
            </section>
        </div>
    `;    
};

const ComponentLogic = (time)=>{        
    const $next = d.querySelector(".btn-next"),
    $exit = d.querySelector(".btn-exit"),
    $emergentCard = d.querySelector(".emergent-card");

    //per convertire il tempo in sec in ora leggibile
    let min = Math.floor(time%(60*60)/(60)),
    sec = Math.floor(time%(60));
    if(time===0){
        d.querySelector(".card-time .time").innerHTML = `<p>--:--</p>`
    }else{
        d.querySelector(".card-time .time").innerHTML = `<p>0${min}:${(sec<10) ?`0${sec}` :sec}</p>`
    };


    //per potere aggiungere  il effetto di ingresso al componente
    setTimeout(() => {
        $emergentCard.classList.add("active");
    }, 200);

    //para redirigir la pagina despues de hacer click en una de las opciones del EMERGENT-CARD
    $exit.addEventListener("click",e=>location.href=``);
    $next.addEventListener("click",e=>location.href = `#/q${parseInt(location.hash[3])+1}/${location.hash.substring(5)}`);    
};