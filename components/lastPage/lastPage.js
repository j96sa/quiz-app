const d = document;
import traduction from "./lastPageTraduction.js";

export const LastPage = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    renderLastPage(LANGUAGE);
    componentInteractions();
}; 


const componentInteractions = ()=>{
    const $butt = d.querySelector(".lastpage .butt");    
        
    $butt.addEventListener("click",()=>{
        location.hash=""
        location.reload();
    });
};


const renderLastPage = (lan)=>{
    d.getElementById("root").innerHTML = `
        <div class="lastpage">
            <section class="filter">
                <h1>${traduction[lan].h1}</h1>
                <p>${traduction[lan].p1}</p>
                <p>${traduction[lan].p2}</p>
                <button class="butt">ok</button>
            </section>
        </div>
    `;    
};