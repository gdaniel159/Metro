import bebible from "../assets/images/bebible.jpg";
import despesa from "../assets/images/despensa.jpg";
import cuidado from "../assets/images/cuidado.jpg";
import congelados from "../assets/images/congelados.jpg";
import "../styles/electrohogar.css";

export default function SuperMercado() {
    return(
        <>
            <div className="section-electro">
                <div className="electro">
                    <div className="img-elec">
                        <img src={bebible} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Bebibles</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={despesa} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Despensa</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={cuidado} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Cuidado Personal</h2>
                    </div>
                </div>
                <div className="electro">
                    <div className="img-elec">
                        <img src={congelados} alt="" />
                    </div>
                    <div className="subtitulo">
                        <h2>Congelados y preparados</h2>
                    </div>
                </div>
            </div>
        </>
    );
}