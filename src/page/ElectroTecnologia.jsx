import tv from "../assets/images/tv.jpg";
import com from "../assets/images/com-tel.jpg";
import linea from "../assets/images/refri-coc.jpg";
import electro from "../assets/images/elec.jpg";
import pc from "../assets/images/pc_icon.svg"
import tel from "../assets/images/phone_icon.svg"
import wash from "../assets/images/wash_icon.svg"
import "../styles/electrohogar.css";
export default function ElectroTecnologia() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-electro">
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={tv} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>TV video y audio</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={com} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Cómputo y telefonía</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={linea} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Línea Blanca</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={electro} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Pequeños electrodomésticos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex">
            <div className="col-md-4">
              <img src={pc} alt="pc-icon" className="img-fluid" />
            </div>
            <div className="col-md-8">

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
