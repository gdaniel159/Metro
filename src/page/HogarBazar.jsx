import mascota from "../assets/images/mascotas.jpg";
import juguetes from "../assets/images/juguetes.jpg";
import decoracion from "../assets/images/deco.jpg";
import mueble from "../assets/images/mueble.jpg";
import "../styles/electrohogar.css";

export default function HogarBazar() {
    return(
        <>
            <div className="section-electro">
                <div className="electro">
                    <div className="img-elec">
                        <img src={mascota} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Mascotas</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={juguetes} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Juguetes</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={decoracion} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Deco Hogar</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={mueble} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Muebles</h2>
                    </div>
                </div>
            </div>
        </>
    );
}