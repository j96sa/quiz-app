import { Home } from "./components/home/Home.js";
import { q1 } from "./components/q1/Q1.js";

export default function Router(){
    const {hash} = location;

    switch (hash) {
        case "":
            Home();             
        break;
    
        case "#/q1":
            q1();             
        break;
    }
};