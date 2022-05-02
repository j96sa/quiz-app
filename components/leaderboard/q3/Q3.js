const d = document;

//Logica de la inserzione delle funzioni
export const Q3 = ()=>{
    RenderQ3();
};


const RenderQ3 = ()=>{
    d.getElementById("root").innerHTML = `
    <div class="q3">
        <div class="filter">
            <div class="clock"></div>    

            <article class="hero">  
                <h1>In che anno</h1>
                    <ul>
                        <li>e iniziata la Seconda Guerra Mondiale?</li>
                        <li>e stato il attentato alle Torri Gemelle</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <br>
                        <hr><hr><hr><hr><hr><hr>
                        <br>
                        <hr><hr><hr><hr><hr><hr><br>
                        <hr><hr><hr><hr><hr><hr>
                    </ul>
            </article>

            <ul class="">
                <li data-response="">1939-seconda guerra mondiale</li>
                <li data-response="">2001-attentato alle torri gemelle</li>
                <li data-response=""></li>
                <li data-response=""></li>
                <li data-response=""></li>
            </ul>
        </div>
        <section class="card"></section>
    </div>
    `;
};




