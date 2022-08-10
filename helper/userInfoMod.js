//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
export const userInfoMod = (score)=>{                
    
    const userArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    const userID = (location.hash).substring(5);
    const QUESTION = location.hash.substring(3,4);

    userArray.forEach(user=>{
        if(user.id === userID){
                                             
            QUESTION === "1" ?user.score = score :user.score = Math.round(((score+user.score)/2)*10)/10;
            
            localStorage.setItem("leaderboard",JSON.stringify(userArray));
        };
    });
        
};