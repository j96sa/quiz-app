const d = document;

//Array donde se alamcenan los titulos de los libros
const BooksArr = [
    {book:"El Viejo y el Mar"},
    {book:"Romeo y Julieta"},
    {book:"Shining"},
    {book:"Don Quijote de la Mancha"},
    {book:"El Gato Negro"}
];

//variable para conectar el libro con el autor y saber si se ha seleccionado la opcion correcta
const BOOK_INDEX = Math.floor(Math.random()*BooksArr.length);


//VARIABLES CON LOS DATOS PARA MODIFICAR LA INFORMACION DEL USUARIO
const startTime = Date.now();
let score = 0;

/* * * * CONSTANTE PARA EXPORTAR EL COMPONENTE * * * */
export const Q1 = ()=>{
    RenderQ1(BOOK_INDEX);
    questionValidation(BOOK_INDEX);  
};

/* CONSTANTE PARA SABER SI SE HA SELECCIONADO LA RESPUESTA CORRECTA
Y CON TODA LA LOGICA DEL QUEST DEL COMPONENTE */
const questionValidation = (bookIndex)=>{
    d.addEventListener("click",e=>{
        if(e.target.matches("li") && e.target.dataset.response === BooksArr[bookIndex].book){
            
            //para saber cuanto tiempo ha transcurrido desde que inicio el test hasta que ha sido respondido
            const finalTime = Math.round((Date.now() - startTime)/1000);
            
            if(finalTime < 11){
                score = 5;
            }else if(finalTime < 31){
                score = 4;
            }else if(finalTime < 51){
                score = 3;
            }else if(finalTime < 81){
                score = 2;
            }else{
                score = 1;
            }
            userInfoMod(finalTime,score)

        }else if(e.target.matches("li") && e.target.dataset.response !== BooksArr[bookIndex].book){
            userInfoMod(0,0);
        };
    });
};  


//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
const userInfoMod = (time,score)=>{        
    console.log(time);
    console.log(score)
    
    const userArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    const userID = (location.hash).substring(5);
    
    userArray.forEach(user=>{
        if(user.id === userID){
            
            user.questions.q1.score = score;
            user.questions.q1.time = time;                    
            
            localStorage.setItem("leaderboard",JSON.stringify(userArray));
        };
    });
        
};



/* RENDERIZADO DEL COMPONENTE */
const RenderQ1 = (bookIndex)=>{
    //OPTION 1
    /* const arr = [`
    <h1>Pregunta 1</h1>
    <h2>Cual de los siguientes escritores es el autor del libro: "Romeo y Julieta" </h2>
    <div>
        <li>William Shakespeare</li>
        <li>Ernest Hemingway</li>
        <li>Stephen King</li>
        <li>Jorge Luis Borges</li>
    </div>
    `,
    
    `q1.2`]; */

    d.getElementById("root").innerHTML = `
    <h1>Pregunta 1</h1>
    <h2>Cual de los siguientes escritores es el autor del libro:"${BooksArr[bookIndex].book}"</h2>
    <div>
        <li data-response="${BooksArr[1].book}">William Shakespeare</li>
        <li data-response="${BooksArr[0].book}">Ernest Hemingway</li>
        <li data-response="${BooksArr[2].book}">Stephen King</li>
        <li data-response="${BooksArr[3].book}">Miguel de Cervantes</li>
        <li data-response="${BooksArr[4].book}">Edgar Allan Poe</li>
    </div>
    `;
};

