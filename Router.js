import { Home } from "./components/home/Home.js";
import { Leaderboard } from "./components/leaderboard/Leaderboard.js";
import { Q3 } from "./components/q3/Q3.js";
import { Q1 } from "./components/q1/Q1.js";
import { Q2 } from "./components/q2/q2.js";

export default function Router(){
    const {hash} = location;

    if(hash === ""){
        return Home();
    }else if(hash === "#/leaderboard"){
        Leaderboard();
    }else if(/^#\/q1\/[a-z0-9]+$/g.test(hash)){
        return Q1();
    }else if(/^#\/q2\/[a-z0-9]+$/g.test(hash)){
        return Q2();
    }else if(/^#\/q3\/[a-z0-9]+$/g.test(hash)){
        return Q3();
    }else{
        console.log("CRITICAL ERR");
    }
};