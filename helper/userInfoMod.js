//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
export const userInfoMod = (time,score)=>{                
    
    const userArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    const userID = (location.hash).substring(5);
    const QUESTION = location.hash.substring(2,4);

    userArray.forEach(user=>{
        if(user.id === userID){
            
            user.questions[QUESTION].score = score;
            user.questions[QUESTION].time = time;              
            
            localStorage.setItem("leaderboard",JSON.stringify(userArray));
        };
    });
        
};