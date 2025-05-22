import Cor from "./Cor";
import FirstComponent from "./FirstComponent";

import { useState } from "react";
import Images from "./Images";

    function Conditional(){
     let content;
     let [isLogged, setIsLogged] = useState(false)


    if(isLogged){
         content = <Cor/>
     } else {
         content = <FirstComponent />
     }

    return(
        <>
           {content}
             <button onClick={() => setIsLogged(!isLogged)}>Mudar Estado</button>
        </>
     )
 }

 export default Conditional