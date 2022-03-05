const d = document;


export const q1 = ()=>{
    RenderQ1("change function");
    change();
};


const change = ()=>{
    d.addEventListener("click",e=>{
        if(e.target === d.querySelector(".btn")){
            location.href = location.origin + `/#/new`
            console.log(location);
            console.log(location.hash);
        };
    });
};

/* RENDERIZADO DEL COMPONENTE */
const RenderQ1 = (value)=>{
    d.getElementById("root").innerHTML = `
        <h1>Q1</h1>
    
        <form>
            <input type="text">
            <input type="number">
            <button>send</button>
        </form>
    
        <button class="btn">${value}</button>
    `;
};