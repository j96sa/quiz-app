const d = document;
import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q3Traduction from "./q3Traduction.js";

//Logica de la inserzione delle funzioni
export const Q3 = ()=>{
    const LANGUAGE = localStorage.getItem("language");
    RenderQ3(LANGUAGE);
    questionValidation();
    Temporizador(60000,LANGUAGE);
};  


//array con il nome dei paesi
const countriesArray = [
    "Cuba",
    "Bolivia",
    "Venezuela",
    "Argentina",
    "Republica Dominicana",
    "Puerto Rico"
];


//variabile per ottenere il paese dall'array
const COUNTRY_INDEX = Math.floor(Math.random()*countriesArray.length);


const questionValidation = ()=>{
    const $liElements = d.querySelectorAll(".capitals li");

    const startTime = Date.now();
    let score = 0;


    $liElements.forEach(li=>{
        li.addEventListener("click",e=>{
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

            if (e.target.dataset.response === countriesArray[COUNTRY_INDEX]) {                
                userInfoMod(finalTime,score);
                EmergentCard(finalTime,score);                
            }else{                             
                userInfoMod(finalTime,0);
                EmergentCard(finalTime,0);
            };
        });
    });
};


const RenderQ3 = (lan)=>{
    d.getElementById("root").innerHTML = `
    <div class="q3">
        <div class="filter">
            <div class="clock"></div>    

            <article class="hero">  
                <h1>${q3Traduction[lan]} ${countriesArray[COUNTRY_INDEX]}</h1>                    
            </article>

            <ul class="capitals">
                <li data-response="${countriesArray[0]}">La Habana</li>
                <li data-response="${countriesArray[1]}">Sucre</li>
                <li data-response="${countriesArray[2]}">Caracas</li>
                <li data-response="${countriesArray[4]}">Santo Domingo</li>
                <li data-response="${countriesArray[3]}">Buenos Aires</li>
                <li data-response="${countriesArray[5]}">San Juan</li>
            </ul>
        </div>
        <section class="card"></section>
    </div>
    `;
};




