import bebible from "../assets/images/bebible.jpg";
import despesa from "../assets/images/despensa.jpg";
import cuidado from "../assets/images/cuidado.jpg";
import congelados from "../assets/images/congelados.jpg";
import bebibles from "../assets/images/bebible_icon.svg";
import despensa from "../assets/images/despensa_icon.svg";
import cuidadop from "../assets/images/personal_icon.svg";
import congelado from "../assets/images/congelados_icon.svg";
import bebida from "../assets/images/products/bebidas.jpg";
import despe from "../assets/images/products/despensa.jpg";
import per from "../assets/images/products/cui_per.jpg";
import CardProduct from "../components/CardProduct";
import "../styles/electrohogar.css";

export default function SuperMercado() {
  const productsBebi = [
    {
      src: bebida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: bebida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: bebida,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
  ];

  const productsDes = [
    {
      src: despe,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: despe,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: despe,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
  ];

  const productsCui = [
    {
      src: per,
      name: "Lavadora LG Carga Superior 19Kg WT19BSS6H",
      price: "1899.00",
    },
    {
      src: per,
      name: "Lavadora LG Carga Superior 19Kg WT19BSS6H",
      price: "1899.00",
    },
    {
      src: per,
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
      <CardProduct
        imgSrcSecction={bebibles}
        descProductSection="BEBIBLES"
        product={productsBebi}
      />
      <CardProduct
        imgSrcSecction={despensa}
        descProductSection="DESPENSA"
        product={productsDes}
      />
      <CardProduct
        imgSrcSecction={cuidadop}
        descProductSection="CUIDADO PERSONAL"
        product={productsCui}
      />
    </>
  );
}
