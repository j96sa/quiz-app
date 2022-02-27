//objeto que contiente las traducciones
import traduction from "./traduction.js";

//
const d = document,
ls = localStorage,
leaderboard = localStorage.getItem("leaderboard") || false;

//RUTA EN LA QUE SE EJECUTAN LAS FUNCIONES(para que se ejecuten en un orden logico && asi lo tengo mas organizado y solo tengo que importar en el router un solo componente)
export const Home = ()=>{
    RenderHome(traduction);
    languageChange(traduction);
    registerUser();
};


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */

const registerUser = ()=>{
    const $inputBtnStart = d.querySelector(".form .form-button"),
    $inputBtnRepeat = d.querySelector(".form .repeat-button"),
    $inputText = d.querySelector(`.form [type="text"]`);


    $inputBtnStart.addEventListener("click",e=>{
        //console.log($inputText.value);        

        const userName = $inputText.value,
        id = Math.round(Date.now() * Math.random()) + userName;


        const users = [
            {
                id,
                name:userName,
                general_score:0,
                general_time_response:"",
                questions:{
                    q1:{time:"",score:0}
                }
            }
        ];

        ls.setItem("leaderboard",JSON.stringify(
            users
        ))

        $inputText.value = "";
    });
};

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */


//FUNCION CON LA LOGICA DE LA TRADUCCION DEL COMPONENTE
const traductionFunction = (e,trad)=>{
    const $startButton = d.querySelector(".form .form-button"),
    $playAgainButton = d.querySelector(".form .repeat-button") || null,
    $homeHeroTitle = d.querySelector(".hero article"),
    $languageSelector = d.querySelector(".language-select select");
    
    //para guardar en el localstorage el lenguaje utilizado
    ls.setItem("language",e);

    switch (e) {
        case "es":
            $homeHeroTitle.innerHTML = trad.es.title;
            $startButton.innerHTML = trad.es.buttons.start;
            $playAgainButton!==null ?$playAgainButton.innerHTML = trad.es.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");
        break;
        case "en":
            $homeHeroTitle.innerHTML = trad.en.title;
            $startButton.innerHTML = trad.en.buttons.start;
            $playAgainButton!==null ?$playAgainButton.innerHTML = trad.en.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");
        break;
        case "it":
            $homeHeroTitle.innerHTML = trad.it.title;
            $startButton.innerHTML = trad.it.buttons.start
            $playAgainButton!==null ?$playAgainButton.innerHTML = trad.it.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");
        break;
    };
}


//FUNCION PARA DESENCADENAR EL EVENTO DE TRADUCCION EN EL BOTON DE SELECIONAR EL LENGUAJE
const languageChange = (trad)=>{    
    d.querySelector(".language-select select").addEventListener("change",e=>traductionFunction(e.target.value,trad));
};


//RENDERIZADO DEL COMPONENTE
const RenderHome = (trad)=>{
    d.getElementById("root").innerHTML = 
    `<div class="home">
        <section class="filter"> 

            <section class="hero">
                <section ${leaderboard ?`class="language-select"` :`class="language-select alone"`}>
                ${leaderboard ?`<a class="leaderboard-button">Leaderboard</a>` :`<p  style="display:none"></p>`}

                    <select>                
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>                    
                </section>       

                <article>                    
                    <p><span>Quiz App</span> es una pequeña aplicacion de preguntas aleatorias para poner a prueba tus conocimientos de cultura general. Cuando estes listo introduce tu nombre y presiona el boton empezar</p>
                </article>            
            </section>

            <section class="form">
                <input type="text"/>
                <button class="form-button">empezar</button>
                ${leaderboard ?`<button class="repeat-button">jugar otra vez</button>` :`<p  style="display:none"></p>`}
            </section>
        </section>
    </div>`;

    // PARA QUE CADA VEZ QUE SE ACTUALICE EL COMPONENTE MANTENGA EL LENGUAGE SELECCIONADO POR EL USUARIO
    traductionFunction(ls.getItem("language"),trad);    
};