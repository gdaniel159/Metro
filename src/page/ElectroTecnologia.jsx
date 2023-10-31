import React from "react";
import tv from "../assets/images/tv.jpg";
import com from "../assets/images/com-tel.jpg";
import linea from "../assets/images/refri-coc.jpg";
import electro from "../assets/images/elec.jpg";
import "../styles/electrohogar.css";
export default function ElectroTecnologia() {
    return(
        <>
            <div className="section-electro">
                <div className="electro">
                    <div className="img-elec">
                        <img src={tv} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>TV video y audio</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={com} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Cómputo y telefonía</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={linea} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Línea Blanca</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={electro} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Pequeños electrodomésticos</h2>
                    </div>
                </div>
            </div>
        </>
    );
}