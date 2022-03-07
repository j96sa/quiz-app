import { Home } from "./components/home/Home.js";
import { q1 } from "./components/q1/Q1.js";

const paramRegExp = "lol";
let text = "#/q1/00410josue";
let string = (location.hash).substring(2);

console.log(string);

export default function Router(){
    const {hash} = location;

    switch (hash) {
        case "":
            Home();             
        break;
    
        case paramRegExp.test(hash):
            console.log("regExp");
            q1();             
        break;
    }
};