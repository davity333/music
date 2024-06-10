import Reproductor from "../Atoms/Reproductor";
import Botons from "../Atoms/botons";
import Cuadro from "../Atoms/cuadro";
import React from "react";
import Music from "../Atoms/musica";
import style from './reproductor.module.css'

function Mp3(){
return(
    
    <>
    <Cuadro></Cuadro>
    <Music></Music>
    <Reproductor></Reproductor>
    <Botons></Botons>
    
    </>

)

}
export default Mp3;