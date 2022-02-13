const d = document;
const leaderboard = localStorage.getItem("leaderboard") || true;

export const Home = ()=>{
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
                ${leaderboard ?`<button class="repeat-button">repetir</button>` :`<p  style="display:none"></p>`}
            </section>
        </section>
    </div>`;
};