import React from "react";
import style from "./reproductor.module.css"

function Reproductor(){

    return(
    <>

    <div id={style.label}>
    <input type="range" id={style.reproductor}  />
    </div>
    </>
    )
}
export default Reproductor;