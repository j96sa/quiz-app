import { Home } from "./components/home/Home.js";

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