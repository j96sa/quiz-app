import { userInfoMod } from "../../helper/userInfoMod.js";
import { EmergentCard } from "../emergentCard/EmergentCard.js";
import { Temporizador } from "../temporizador/Temporizador.js";
import q1Traduction from "./q1Traduction.js";


const d = document;

//Array donde se alamcenan los titulos de los libros
const BooksArr = [
    {book:{
        es:"El Viejo y el Mar",
        en:"The Old Man an the Sea",
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
        it:"Shining"
    }},

    {book:{
        es:"Don Quijote de la Mancha",
        en:"Don Quixote",
        it:"Don Chisciotte della Mancia"
    }},

    {book:{
        es:"El Gato Negro",
        en:"The Black Cat",
        it:"Il Gatto Nero"
    }}
];

//variable para conectar el libro con el autor y saber si se ha seleccionado la opcion correcta
const BOOK_INDEX = Math.floor(Math.random()*BooksArr.length);


//VARIABLES CON LOS DATOS PARA MODIFICAR LA INFORMACION DEL USUARIO
const startTime = Date.now();
let score = 0;

/* * * * CONSTANTE PARA EXPORTAR EL COMPONENTE * * * */
export const Q1 = ()=>{     
    const LANGUAGE = localStorage.getItem("language");   
    RenderQ1(BOOK_INDEX,LANGUAGE);    
    questionValidation(BOOK_INDEX,LANGUAGE);    
    Temporizador(60000,LANGUAGE);
};

/* CONSTANTE PARA SABER SI SE HA SELECCIONADO LA RESPUESTA CORRECTA
Y TODA LA LOGICA DEL QUEST DEL COMPONENTE */
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
            
            if(e.target.dataset.response === BooksArr[bookIndex].book[lan]){
                userInfoMod(finalTime,score);                
                EmergentCard(finalTime,score);                
            }else{
                userInfoMod(finalTime,0);
                EmergentCard(finalTime,0);
            };
        };
    });
};  


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

