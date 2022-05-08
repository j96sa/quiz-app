import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q4Traduction from "./q4Traduction.js";

const d = document;

export const Q4 = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    RenderQ4(LANGUAGE);
    questionValidation();
    Temporizador(70000,LANGUAGE);
};


//array con gli nomi dei paesi
const yearsArray = [
    "1945",
    "1986",
    "1939",
    "1914",
    "1989"
];


//const per ottenere il date nell'array
const YEAR_INDEX = Math.floor(Math.random()*yearsArray.length);


const questionValidation = ()=>{
    const $liElements = d.querySelectorAll(".dates li");

    const startTime = Date.now();
    let score = 0;


    $liElements.forEach(li=>{
        li.addEventListener("click",e=>{
            const finalTime = Math.round((Date.now() - startTime)/1000);
        
            if(finalTime < 16){
                score = 5;
            }else if(finalTime < 34){
                score = 4;
            }else if(finalTime < 47){
                score = 3;
            }else if(finalTime < 61){
                score = 2;
            }else{
                score = 1;
            };

            if (e.target.dataset.response === yearsArray[YEAR_INDEX]) {                
                userInfoMod(finalTime,score);
                EmergentCard(finalTime,score);                
            }else{                             
                userInfoMod(finalTime,0);
                EmergentCard(finalTime,0);
            };
        });
    });
};

const RenderQ4 = (lan)=>{
    d.getElementById("root").innerHTML = `
    <div class="q4">
        <div class="filter">
            <div class="clock"></div>   

            <article class="hero">  
                <h1>${q4Traduction[lan].h1} ${yearsArray[YEAR_INDEX]}?</h1>                
            </article>

            <ul class="dates">
                <li data-response="${yearsArray[0]}">${q4Traduction[lan].li_1}</li>
                <li data-response="${yearsArray[1]}">${q4Traduction[lan].li_0}</li>
                <li data-response="${yearsArray[2]}">${q4Traduction[lan].li_2}</li>
                <li data-response="${yearsArray[3]}">${q4Traduction[lan].li_4}</li>
                <li data-response="${yearsArray[4]}">${q4Traduction[lan].li_3}</li>
            </ul>
        </div>
        <section class="card"></section>
    </div>
    `;
};