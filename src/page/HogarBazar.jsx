import mascota from "../assets/images/mascotas.jpg";
import juguetes from "../assets/images/juguetes.jpg";
import decoracion from "../assets/images/deco.jpg";
import mueble from "../assets/images/mueble.jpg";
import mascotas from "../assets/images/mascotas_icon.svg";
import juguete from "../assets/images/Juguetes_icon.svg";
import deco from "../assets/images/deco_icon.svg";
import dormitorio from "../assets/images/dormitorio_icon.svg";
import comida from "../assets/images/products/comidamas.png";
import decor from "../assets/images/products/decor.jpg";
import jug from "../assets/images/products/juquetes.jpg"
import CardProduct from "../components/CardProduct";
import "../styles/electrohogar.css";

export default function HogarBazar() {

  const productsMas = [
    {
      src: comida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: comida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: comida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
  ];

  const productsJug = [
    {
      src: jug,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: jug,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: jug,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
  ];

  const productsdec = [
    {
      src: decor,
      name: "Lavadora LG Carga Superior 19Kg WT19BSS6H",
      price: "1899.00",
    },
    {
      src: decor,
      name: "Lavadora LG Carga Superior 19Kg WT19BSS6H",
      price: "1899.00",
    },
    {
      src: decor,
      name: "Lavadora LG Carga Superior 19Kg WT19BSS6H",
      price: "1899.00",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-electro">
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={mascota} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Mascotas</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={juguetes} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Juguetes</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={decoracion} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Deco Hogar</h2>
              </div>
            </div>
            <div className="col-md-3 electro">
              <div className="img-elec">
                <img src={mueble} alt="" className="img-fluid" />
              </div>
              <div className="subtitulo">
                <h2>Muebles</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardProduct
        imgSrcSecction={mascotas}
        descProductSection="MASCOTAS"
        product={productsMas}
      />
      <CardProduct
        imgSrcSecction={juguete}
        descProductSection="JUGUETES"
        product={productsJug}
      />
      <CardProduct
        imgSrcSecction={deco}
        descProductSection="DECO HOGAR"
        product={productsdec}
      />
    </>
  );
}
