
import style from './botons.module.css'
import React, { useRef, useState } from "react";


function Botons(){
    const audioRef = useRef(null);
    const [audioURL, setAudioURL] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAudioURL(url);
        }
    };

    const Play = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const Pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };


return(
    <>  
            <div id={style.btn}>
       <button onClick={Play}  id={style.botons}>▶</button>
         </div>

       <button onClick={Pause} id={style.botonsPause}>||</button>

        <div id={style.cargar}>
            <input id={style.btnCargar} type="file" accept="audio" onChange={handleFileChange}/>
        </div>
        <audio ref={audioRef} src={audioURL} id="reproductor" style={{ display: 'none' }} />
    </>
)

}

export default Botons;