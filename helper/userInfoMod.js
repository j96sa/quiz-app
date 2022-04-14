//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
export const userInfoMod = (time,score)=>{                
    
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