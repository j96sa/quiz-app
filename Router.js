import { Home } from "./components/home/Home.js";
import { Leaderboard } from "./components/leaderboard/Leaderboard.js";
import { Q3 } from "./components/q3/Q3.js";
import { Q1 } from "./components/q1/Q1.js";
import { Q2 } from "./components/q2/q2.js";
import { Q4 } from "./components/q4/Q4.js";
import { Q5 } from "./components/q5/Q5.js";
import { LastPage } from "./components/lastPage/lastPage.js";

export default function Router(){
    const {hash} = location;

    if(hash === ""){
        return Home();
    }else if(hash === "#/leaderboard" || hash === "#/playagain-leaderboard"){
        Leaderboard();
    }else if(/^#\/q1\/[a-z0-9]+$/g.test(hash)){
        return Q1();
    }else if(/^#\/q2\/[a-z0-9]+$/g.test(hash)){
        return Q2();
    }else if(/^#\/q3\/[a-z0-9]+$/g.test(hash)){
        return Q3();
    }else if(/^#\/q4\/[a-z0-9]+$/g.test(hash)){
        return Q4();
    }else if(/^#\/q5\/[a-z0-9]+$/g.test(hash)){
        return Q5();
    }
    else if("#/lastpage"){
        return LastPage();
    }else{
        console.log("404: ROUTER ERR");
    }
};