//objeto que contiente las traducciones
import traduction from "./traduction.js";

//
const d = document,
ls = localStorage,
leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

//RUTA EN LA QUE SE EJECUTAN LAS FUNCIONES(para que se ejecuten en un orden logico && asi lo tengo mas organizado y solo tengo que importar en el router un solo componente)
export const Home = ()=>{
    RenderHome(traduction);
    languageChange(traduction);
    registerUser();
    leaderboardLinkOpen();
    leaderboard.length>0 ?playAgain() :null;
};


/***********************************************************/
//LEADERBOARD component(opening from home link)
const leaderboardLinkOpen = ()=>{
    const $leaderboardLink = d.querySelector(".hero .leaderboard-button");

    $leaderboardLink.addEventListener("click",e=>{
        location.href = `#/leaderboard`;
    });
};


/***********************************************************/


/* ************************************************************ */
const playAgain = ()=>{
    const $playButton = d.querySelector(".form .repeat-button");

    $playButton.addEventListener("click",e=>{
        location.href = `#/playagain-leaderboard`;
    });
};
/* ************************************************************ */


//LOGICA PARA INSERTAR A LOS USUARIOS EN EL LOCALSTORAGE
const registerUser = ()=>{
    const $inputBtnStart = d.querySelector(".form .form-button"),
    $form = d.querySelector(".filter .form"),
    //$inputBtnRepeat = d.querySelector(".form .repeat-button"),
    $inputText = d.querySelector(`.form [type="text"]`);
    

    //FUNCION PARA INSERTAR A LOS USUARIOS EN EL LOCALSTORAGE
    const dispatchRegisterUserEvent = (e)=>{
        let regexpValidation = /^[a-z\s]+$/ig.test($inputText.value);

        if ($inputText.value!=="" && regexpValidation){
            const userName = $inputText.value;

            let randomID = Math.round(Date.now() * Math.random()) + userName.toLowerCase();
            randomID = Array.from(randomID);
            randomID = randomID.filter(e=>e!==" ");

            const id = randomID.join("");

            leaderboard.push(
                {
                    id,
                    name:userName,
                    score:0
                }
            )
                
            ls.setItem("leaderboard",JSON.stringify(leaderboard));
            $inputText.value = "";
            
            //para redireccionar la pagina 
            location.href = `#/q1/${id}`;
        }else{
            $form.classList = "form message-on";
            $inputText.value = "";
            setTimeout(()=>{    
                $form.classList = "form";
            },3000);
        };
    };

    //desencadenante del evento mediante click
    $inputBtnStart.addEventListener("click",e=>{
        e.preventDefault();        
        dispatchRegisterUserEvent();
    });
    
    //desencadenante del evento mediante Enter
    $form.addEventListener("keydown",e=>{
        if(e.key==="Enter"){
            e.preventDefault();
            dispatchRegisterUserEvent();
        } 
    });
};



//FUNCION CON LA LOGICA DE LA TRADUCCION DEL COMPONENTE
const traductionFunction = (e,trad)=>{
    const $startButton = d.querySelector(".form .form-button"),
    $playAgainButton = d.querySelector(".form .repeat-button") || null,
    $homeHeroTitle = d.querySelector(".hero article"),
    $languageSelector = d.querySelector(".language-select select"),
    $inputTextPlaceholder = d.querySelector(`.form input[type="text"]`),
    $errorInputMessage = d.querySelector(".form p");
    
    //para guardar en el localstorage el lenguaje utilizado
    ls.setItem("language",e);

    switch (e) {
        case "es":
            $homeHeroTitle.innerHTML = trad.es.title;
            $startButton.value = trad.es.buttons.start;
            $playAgainButton!==null ?$playAgainButton.value = trad.es.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");            
            $inputTextPlaceholder.placeholder = trad.es.placeholder;
            $errorInputMessage.innerText = trad.es.error_message;
        break;
        case "en":
            $homeHeroTitle.innerHTML = trad.en.title;
            $startButton.value = trad.en.buttons.start;
            $playAgainButton!==null ?$playAgainButton.value = trad.en.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");
            $inputTextPlaceholder.placeholder = trad.en.placeholder;
            $errorInputMessage.innerText = trad.en.error_message;
        break;
        case "it":
            $homeHeroTitle.innerHTML = trad.it.title;
            $startButton.value = trad.it.buttons.start
            $playAgainButton!==null ?$playAgainButton.value = trad.it.buttons.repeat :false;
            $languageSelector.querySelector(`option[value=${e}]`).setAttribute("selected","");
            $inputTextPlaceholder.placeholder = trad.it.placeholder;
            $errorInputMessage.innerText = trad.it.error_message;
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
                <section ${leaderboard.length>0 ?`class="language-select"` :`class="language-select alone"`}>
                ${leaderboard.length>0 ?`<a class="leaderboard-button">Leaderboard</a>` :`<p  style="display:none"></p>`}

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

            <form class="form">
            <p>debe completar el campo con caracteres alfabeticos</p>
                <input required type="text" placeholder="escribe tu nombre..."/>
                <input type="submit" class="form-button" value="empezar">
                ${leaderboard.length>0 ?`<input type="submit" class="repeat-button" value="jugar otra vez">` :`<p  style="display:none"></p>`}
            </form>
        </section>
    </div>`;

    // PARA QUE CADA VEZ QUE SE ACTUALICE EL COMPONENTE MANTENGA EL LENGUAGE SELECCIONADO POR EL USUARIO
    traductionFunction(ls.getItem("language"),trad);    
};