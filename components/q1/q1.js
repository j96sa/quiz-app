import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q1Traduction from "./q1Traduction.js";


const d = document;

//Array donde se alamcenan los titulos de los libros
const BooksArr = [
    {book:{
        es:"El Viejo y el Mar",
        en:"The Oldman an the Sea",
        it:"Il Vechio e il Mare"
    }},

    {book:{
        es:"Romeo y Julieta",
        en:"Romeo and Juliet",
        it:"Romeo e Giulietta"
    }},

    {book:{
        es:"Resplandor",
        en:"Shining",
        it:"Brillante"
    }},

    {book:{
        es:"Don Quijote de la Mancha",
        en:"Don Quixote form The Mancha",
        it:"Il Quixote di Mancha"
    }},

    {book:{
        es:"El Gato Negro",
        en:"The Black Cat",
        it:"Il Gatto Nero"
    }}
];

/* const BooksArr = [
    {book:"El Viejo y el Mar"},
    {book:"Romeo y Julieta"},
    {book:"Shining"},
    {book:"Don Quijote de la Mancha"},
    {book:"El Gato Negro"}
]; */

//variable para conectar el libro con el autor y saber si se ha seleccionado la opcion correcta
const BOOK_INDEX = Math.floor(Math.random()*BooksArr.length);


//VARIABLES CON LOS DATOS PARA MODIFICAR LA INFORMACION DEL USUARIO
const startTime = Date.now();
let score = 0;

/* * * * CONSTANTE PARA EXPORTAR EL COMPONENTE * * * */
export const Q1 = ()=>{     
    const LANGUAGE = localStorage.getItem("language");   
    RenderQ1(BOOK_INDEX,LANGUAGE);
    /* **********************               ****************************** */
    //traductionFunction(localStorage.getItem("language"));
    /* **********************               ****************************** */
    questionValidation(BOOK_INDEX,LANGUAGE);    
    Temporizador(660000);
};

/* CONSTANTE PARA SABER SI SE HA SELECCIONADO LA RESPUESTA CORRECTA
Y CON TODA LA LOGICA DEL QUEST DEL COMPONENTE */
const questionValidation = (bookIndex,lan)=>{

    d.addEventListener("click",e=>{
        if(e.target.matches(".writers li")){            
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

            console.log(`score:${score},time:${finalTime}`);
            
            if(e.target.dataset.response === BooksArr[bookIndex].book[lan]){
                userInfoMod(finalTime,score);                
                EmergentCard("respuesta correcta",finalTime,score);                
            }else{
                userInfoMod(finalTime,0);
                EmergentCard("respuesta incorrecta",finalTime,0);
            };
        };
    });
};  

//CONSTANTE PARA EJECUTAR LA TRADUCION DEL COMPONENTE
/* const traductionFunction = (lan)=>{
    const $heroTitle = d.querySelector(".hero .hero-title");
    console.log(lan);

    switch (lan) {
        case "es":
            $heroTitle.innerHTML = q1Traduction.es.h2;
        break;

        case "en":
            $heroTitle.innerHTML = q1Traduction.en.h2;
        break;

        case "it":
            $heroTitle.innerHTML = q1Traduction.it.h2;
        break;
    }
}; */


//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
/* const userInfoMod = (time,score)=>{                
    
    const userArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    const userID = (location.hash).substring(5);
    
    userArray.forEach(user=>{
        if(user.id === userID){
            
            user.questions.q1.score = score;
            user.questions.q1.time = time;                    
            
            localStorage.setItem("leaderboard",JSON.stringify(userArray));
        };
    });
        
}; */


//<h2>Cual de los siguientes escritores es el autor del libro:</h2>
/* RENDERIZADO DEL COMPONENTE */
const RenderQ1 = (bookIndex,lan)=>{
    d.getElementById("root").innerHTML = `
    <div class="q1">
        <div class="filter">
            <div class="clock"></div>    

            <article class="hero">  
                <h1>${q1Traduction[lan].h2}</h1>                          
                <h2 class="book-title">"${BooksArr[bookIndex].book[lan]}"</h2>
            </article>

            <ul class="writers">
                <li data-response="${BooksArr[1].book[lan]}">William Shakespeare</li>
                <li data-response="${BooksArr[0].book[lan]}">Ernest Hemingway</li>
                <li data-response="${BooksArr[2].book[lan]}">Stephen King</li>
                <li data-response="${BooksArr[3].book[lan]}">Miguel de Cervantes</li>
                <li data-response="${BooksArr[4].book[lan]}">Edgar Allan Poe</li>
            </ul>
        </div>
        <section class="card"></section>
    </div>
    `;
};

