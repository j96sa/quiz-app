const d = document;


export const q1 = ()=>{
    RenderQ1("change function");
    change();
};


const change = ()=>{
    d.addEventListener("click",e=>{
        if(e.target === d.querySelector(".btn")){
            const userArray = JSON.parse(localStorage.getItem("leaderboard")),
            
            userID = (location.hash).substring(5),
            $time = d.querySelector(".form .time").value,
            $score = d.querySelector(".form .score").value;

            console.log(userArray);
            userArray.forEach(user=>{
                if(user.id === userID){
                    
                    user.questions.q1.score = $score;
                    user.questions.q1.time = $time;
                    
                    localStorage.setItem("leaderboard",JSON.stringify(userArray));
                };
            });
        };
    });
};

/* RENDERIZADO DEL COMPONENTE */
const RenderQ1 = (value)=>{
    d.getElementById("root").innerHTML = `
        <h1>Q1</h1>
    
        <form class="form">
            <input class="time" type="text" placeholder="time...">
            <input class="score" type="number" placeholder="score...">
            <button>send</button>
        </form>
    
        <button class="btn">${value}</button>
    `;
};

