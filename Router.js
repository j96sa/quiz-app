import { Home } from "./components/home/Home.js";
import { Leaderboard } from "./components/leaderboard/Leaderboard.js";
import { Q1 } from "./components/q1/Q1.js";

export default function Router(){
    const {hash} = location;

    if(hash === ""){
        return Home();
    }else if(/^#\/q1\/[a-z0-9]+$/g.test(hash)){
        return Q1();
    }else if(hash === "#/leaderboard"){
        Leaderboard();
    }else{
        console.log("CRITICAL ERR");
    }

    /* switch (hash) {
        case "":
            Home();             
        break;
    
        case /^#\/q1\/[a-z0-9]+$/g.test(hash):            
            q1();             
        break;
    }; */
};