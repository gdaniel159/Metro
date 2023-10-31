import bebible from "../assets/images/bebible.jpg";
import despesa from "../assets/images/despensa.jpg";
import cuidado from "../assets/images/cuidado.jpg";
import congelados from "../assets/images/congelados.jpg";
import "../styles/electrohogar.css";

export default function SuperMercado() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-electro">
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={bebible} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Bebibles</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={despesa} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Despensa</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={cuidado} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Cuidado Personal</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={congelados} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Congelados y preparados</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
