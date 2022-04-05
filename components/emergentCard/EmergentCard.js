const d = document;

export const EmergentCard = (text,time,score)=>{
    d.querySelector(".card").innerHTML = EmergentCardRenderComponent(text,time,score);
    ComponentLogic();
};

const EmergentCardRenderComponent = (text,time,score)=>{
    return `
        <div class="emergent-card">
            <p style="color:#a00">HOLA SOY LA TARJETA EMERGENTE</p>
            <h1>${text}</h1>
            <p>${time}</p>
            <button class="btn-exit">salir</button>
            <button class="btn-next">continuar</button>
        </div>
    `;    
};

const ComponentLogic = ()=>{        
    const $next = d.querySelector(".btn-next"),
    $exit = d.querySelector(".btn-exit");

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