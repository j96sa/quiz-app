const d = document;


export const q1 = ()=>{
    RenderQ1("change function");
    change();
};


const change = ()=>{
    d.addEventListener("click",e=>{
        if(e.target === d.querySelector(".btn")){
            const userInfo = JSON.parse(localStorage.getItem("leaderboard"));
            /* $time = d.querySelector(".form .time").value,
            $score = d.querySelector(".form .score").value;            

            userInfo.questions.q1.time = $time;
            userInfo.questions.q1.score = $score;

            console.log(userInfo); */

            /* ******* */
            /* userInfo.forEach(e=>{
                e.name === "josue" ?console.log(e) :null;
            }); */

            console.log(location);
        };
    });
};

/* RENDERIZADO DEL COMPONENTE */
const RenderQ1 = (value)=>{
    d.getElementById("root").innerHTML = `
        <h1>Q1</h1>
    
        <form class="form">
            <input class="time" type="text">
            <input class="score" type="number">
            <button>send</button>
        </form>
    
        <button class="btn">${value}</button>
    `;
};

