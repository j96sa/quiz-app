const d = document;
import q5Traduction from "./q5Traduction.js";


export const Q5 = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    RenderQ5(LANGUAGE);
    questionValidation();
};

const SongLs = ["Imagine","Mama","Thriller","Titanic","Halo"]
const RandomSong = SongLs[Math.floor(Math.random()*SongLs.length)];

const questionValidation = ()=> {

    if(finalTime < 12){
        score = 5;
    }else if(finalTime < 24){
        score = 4;
    }else if(finalTime < 36){
        score = 3;
    }else if(finalTime < 55){
        score = 2;
    }else{
        score = 1;
    };

    if (e.target.dataset.response === yearsArray[YEAR_INDEX]) {                
        userInfoMod(score);
        EmergentCard(finalTime,score);                
    }else{                             
        userInfoMod(0);
        EmergentCard(finalTime,0);
    };

};


const RenderQ5 = (lan)=>{
    d.getElementById("root").innerHTML = `
        <h1>${q5Traduction[lan].h1} "${RandomSong}"</h1>


        <ul>
            <li class="Imagine">Jhon Lennon</li>
            <li class="Mama">Freddie Mercury</li>
            <li class="Thriller">Michael Jackson</li>
            <li class="Titanic">Celine Dion</li>
            <li class="Halo">Beyonce</li>
        </ul>
    `;
};