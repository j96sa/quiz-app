//COSNTANTE PARA MODIFICAR LA INFORMACION DEL USUARIO
export const userInfoMod = (score)=>{                
    
    const userArray = JSON.parse(localStorage.getItem("leaderboard"));
    
    const userID = (location.hash).substring(5);
    const QUESTION = location.hash.substring(3,4);

    userArray.forEach(user=>{
        if(user.id === userID){
            console.log(score);
            
            switch (QUESTION) {
                case "1":
                    user.score = score
                    user.acumulated_score = score
                break;

                case "2":
                    user.acumulated_score = user.acumulated_score + score;
                    user.score = user.acumulated_score/2
                break;

                case "3":
                    user.acumulated_score = user.acumulated_score + score;
                    user.score = user.acumulated_score/3
                break;

                case "4":
                    user.acumulated_score = user.acumulated_score + score;
                    user.score = Math.round((user.acumulated_score/4)*10)/10
                break;
            
                default:
                break;
            };
        
            localStorage.setItem("leaderboard",JSON.stringify(userArray));
        };
    });
        
};