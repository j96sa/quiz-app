import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q2Traduction from "./q2Traduction.js";

const d = document;

export const Q2 = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    RenderQ2(LANGUAGE);
    questionValidation();
    Temporizador(80000,LANGUAGE);
};


//Array con il nome di gli scienziati
const ScienziatiArr = [
    "Albert Einstein",
    "Charles Darwin",
    "Stephen Hawking",
    "Nikola Tesla",
    "Isaac Newton",
    "Sigmund Freud"
];

const SCIENZIATI_INDEX = Math.floor(ScienziatiArr.length*Math.random());


const questionValidation = ()=>{    
    const $liElements = d.querySelectorAll(".discoveries li");

    const startTime = Date.now();
    let score = 0;


    $liElements.forEach(li=>{
        li.addEventListener("click",e=>{
            const finalTime = Math.round((Date.now() - startTime)/1000);
        
            if(finalTime < 16){
                score = 5;
            }else if(finalTime < 36){
                score = 4;
            }else if(finalTime < 51){
                score = 3;
            }else if(finalTime < 71){
                score = 2;
            }else{
                score = 1;
            };

            if (e.target.dataset.response === ScienziatiArr[SCIENZIATI_INDEX]) {                
                userInfoMod(finalTime,score);
                EmergentCard(finalTime,score);
            }else{                
                userInfoMod(finalTime,0);
                EmergentCard(finalTime,0);
            };
        });
    });
};

const RenderQ2 = (lan)=>{
    d.getElementById("root").innerHTML = `
    <div class="q2">
        <div class="filter">
            <div class="clock"></div>    

            <article class="hero">
                <h1>${q2Traduction[lan].hero} <span>${ScienziatiArr[SCIENZIATI_INDEX]}</span> :</h1>            
            </article>

            <ul class="discoveries">
                <li data-response="${ScienziatiArr[0]}">${q2Traduction[lan].res1}</li>
                <li data-response="${ScienziatiArr[1]}">${q2Traduction[lan].res2}</li>
                <li data-response="${ScienziatiArr[2]}">${q2Traduction[lan].res3}</li>
                <li data-response="${ScienziatiArr[3]}">${q2Traduction[lan].res4}</li>
                <li data-response="${ScienziatiArr[4]}">${q2Traduction[lan].res5}</li>
                <li data-response="${ScienziatiArr[5]}">${q2Traduction[lan].res6}</li>
            </ul>

        </div>
        <section class="card"></section>
    </div>        
    `;
}