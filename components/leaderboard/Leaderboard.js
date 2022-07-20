const d = document;
const $fragment = d.createDocumentFragment();

export const Leaderboard = ()=>{
    RenderLeaderboard();
    printUsers();
    test();
};

const test = ()=>{
    const $li = d.querySelectorAll(".user-list li");

    d.addEventListener("click",e=>{
        if(e.target.matches(".user-list li")){
            console.log(e.target.className);

            location.href = `#/q1/${e.target.className}`
        };
    });
};

const printUsers = ()=>{
    const usersArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    usersArray.forEach(e=>{
        let li = d.createElement("li");
        li.innerText = e.name;
        li.className = e.id;
        $fragment.appendChild(li);
    });
    
    d.querySelector(".user-list").appendChild($fragment);
};


const RenderLeaderboard = ()=>{
    d.getElementById("root").innerHTML = `
    <h2>LEADERBOARD</h2>
    <div class="user-list"></div>
    `;    
};