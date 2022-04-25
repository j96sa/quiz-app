import { userInfoMod } from "../../helper/userInfoMod.js";
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
    const startTime = Date.now();
    let score = 0;

    d.addEventListener("click",e=>{
        if(e.target.matches(".descubrimientos li")){
            const finalTime = Math.round((Date.now() - startTime)/1000);
        
            if(finalTime < 11){
                score = 5;
            }else if(finalTime < 31){
                score = 4;
            }else if(finalTime < 51){
                score = 3;
            }else{
                score = 2;
            };

            if (e.target.dataset.response === ScienziatiArr[SCIENZIATI_INDEX]) {
                userInfoMod
            }else{
                console.log("false");
            }
        };
    });
};

const RenderQ2 = (lan)=>{
    d.getElementById("root").innerHTML = `
    <div class="q2">
        <div class="filter">
            <div class="clock"></div>    

            <p>${q2Traduction[lan].hero} ${ScienziatiArr[SCIENZIATI_INDEX]} :</p>

            <ul class="descubrimientos">
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