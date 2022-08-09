const d = document;
const $fragment = d.createDocumentFragment();

export const Leaderboard = ()=>{
    RenderLeaderboard();
    printUsers();
    leaderboardInteractions();
};

const leaderboardInteractions = ()=>{
    d.addEventListener("click",e=>{
        //validazione per quando se apre il leaderboard dal link play again o dal link leaderboard(nel componente Home)
        if(e.target.matches(".user-list li") && location.hash === "#/playagain-leaderboard"){            
            location.href = `#/q1/${e.target.className}`;
        };

        //back to Home
        if(e.target.matches(".back-arrow svg") || e.target.matches(".back-arrow svg path")){
            location.href = ``;
        };
    });
};


const printUsers = ()=>{
    const usersArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    usersArray.forEach(e=>{
        let li = d.createElement("li");

        let $rankNumber = d.createElement("article");
        $rankNumber.innerHTML = `<p>1st</p>`;
        
        let $userStats = d.createElement("article");
        $userStats.innerHTML = `<p>${e.name}</p> <p>score : ${e.general_score}</p>`;
                
        
        li.className = e.id;
        li.appendChild($rankNumber);
        li.appendChild($userStats);        

        $fragment.appendChild(li);
    });
    
    d.querySelector(".user-list ul").appendChild($fragment);
};


/* const RenderLeaderboard = ()=>{
    d.getElementById("root").innerHTML = `
        <div class="leaderboard">        

            <div class="back-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>                
            </div>

            <figure>
                <img src="../../assets/winner.svg" alt="img">
            </figure>
            
            <div class="user-list">
                <ul>
                </ul>
            </div>
        </div>
    `;    
}; */

const RenderLeaderboard = ()=>{
    d.getElementById("root").innerHTML = `
        <div class="leaderboard">        

            <section class="leaderboard-header">
                <div class="back-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>                
                </div>

                <figure>
                    <img src="../../assets/winner.svg" alt="img">
                </figure>            
            </section>
            
            
                <div class="user-list">
                    <ul>
                    </ul>
                </div>
            
        </div>
    `;    
};