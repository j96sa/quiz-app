const d = document;
import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q5Traduction from "./q5Traduction.js";


export const Q5 = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    RenderQ5(LANGUAGE);
    questionValidation();
    Temporizador(50000,LANGUAGE);
};

const SongLs = ["Imagine","Mama","Thriller","Titanic","Halo"]
const RandomSong = SongLs[Math.floor(Math.random()*SongLs.length)];

const questionValidation = (e)=> {
    const $liElements = d.querySelectorAll(".artist_list li");
    
    const startTime = Date.now();
    let score = 0;
    
    $liElements.forEach(li=>{
        li.addEventListener("click",e=>{
            const finalTime = Math.round((Date.now() - startTime)/1000);

            if(finalTime < 10){
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
        
            if (e.target.className === RandomSong) {                                
                userInfoMod(score);
                EmergentCard(finalTime,score);                
            }else{                                             
                userInfoMod(0);
                EmergentCard(finalTime,0);
            };
        });
    });
};


const RenderQ5 = (lan)=>{
    d.getElementById("root").innerHTML = `
        <div class="q5">
            <div class="filter">
                <div class="clock"></div>

                <article class="hero">
                    <h1>${q5Traduction[lan].h1} <span>"${RandomSong}"</span></h1>
                </article>
        
                <ul class="artist_list">
                    <li class="Imagine">Jhon Lennon</li>
                    <li class="Mama">Freddie Mercury</li>
                    <li class="Thriller">Michael Jackson</li>
                    <li class="Titanic">Celine Dion</li>
                    <li class="Halo">Beyonce</li>
                </ul>
            </div>
            <section class="card"></section>
        </div>
    `;
};