import { Home } from "./components/home/home.js";

export default function Router(){
    const {hash} = location;

    switch (hash) {
        case "":
            Home();            
        break;
    
        default:

        break;
    }
};