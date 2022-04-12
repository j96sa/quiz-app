const d = document;

export const EmergentCard = (text,time,score)=>{
    d.querySelector(".card").innerHTML = EmergentCardRenderComponent(text,time,score);
    ComponentLogic(time);
};

const EmergentCardRenderComponent = (text,time,score)=>{
    return `
        <div class="emergent-card score-${score}">            
            <h1 class="card-hero">${text}</h1>
            
            <section class="rank-score">
                <p  class="score-${score}">score</p>
                <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </section>
            
            <section class="card-time">
                <p class="time-subtitle  score-${score}">time to response</p>
                <p class="time"></p>
            </section>
            
            <section class="card-buttons score-${score}">
                <button class="btn-exit">salir</button>
                <button class="btn-next">continuar</button>
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
    d.addEventListener("click",e=>{
        e.stopImmediatePropagation();
        
        if(e.target === $exit){
            console.log("EXIT");
            location.href = ``;            
        }else if(e.target === $next){
            console.log("next");
            console.log(parseInt(location.hash[3]));
            location.href = `#/q${parseInt(location.hash[3])+1}/${location.hash.substring(5)}`;
        };

    });
};