import tv from "../assets/images/tv.jpg";
import com from "../assets/images/com-tel.jpg";
import linea from "../assets/images/refri-coc.jpg";
import electro from "../assets/images/elec.jpg";
import pc from "../assets/images/pc_icon.svg";
import tel from "../assets/images/phone_icon.svg";
import wash from "../assets/images/wash_icon.svg";
import tv_product from "../assets/images/products/tv.jpg";
import smarthphone from "../assets/images/products/smarthphone.png";
import CardProduct from "../components/CardProduct";
import "../styles/electrohogar.css";

export default function ElectroTecnologia() {
  const productsPC = [
    {
      src: tv_product,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: tv_product,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
    {
      src: tv_product,
      name: "Televisor Hisense Smart TV 55'' UHD 4K 55A6K",
      price: "949.00",
    },
  ];

  const productsSmart = [
    {
      src: smarthphone,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: smarthphone,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
    {
      src: smarthphone,
      name: "Smartphone Samsung Galaxy A04 3Gb + 32Gb",
      price: "399.00",
    },
  ];

  const productsWash = [
    {
      src: "",
      name: "",
      price: "",
    },
    {
      src: "",
      name: "",
      price: "",
    },
    {
      src: "",
      name: "",
      price: "",
    },
  ];

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

      <CardProduct
        imgSrcSecction={pc}
        descProductSection="TV VIDEO Y AUDIO"
        product={productsPC}
      />
      <CardProduct
        imgSrcSecction={tel}
        descProductSection="CÓMPUTO Y TELEFONÍA"
        product={productsSmart}
      />
      <CardProduct
        imgSrcSecction={wash}
        descProductSection="LÍNEA BLANCA"
        product={productsWash}
      />
    </>
  );
}
