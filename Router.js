import { Home } from "./components/home/Home.js";
import { q1 } from "./components/q1/Q1.js";

export default function Router(){
    const {hash} = location;

    if(hash === ""){
        return Home();
    }else if(/^#\/q1\/[a-z0-9]+$/g.test(hash)){
        return q1();
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