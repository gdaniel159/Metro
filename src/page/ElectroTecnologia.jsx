import { useEffect, useState, useRef } from "react";
import tv from "../assets/images/tv.jpg";
import com from "../assets/images/com-tel.jpg";
import linea from "../assets/images/refri-coc.jpg";
import electro from "../assets/images/elec.jpg";
import pc from "../assets/images/pc_icon.svg";
import tel from "../assets/images/phone_icon.svg";
import wash from "../assets/images/wash_icon.svg";
import CardProduct from "../components/CardProduct";
import { getProductsByCategory } from "../api/api";
import { Toast } from "primereact/toast";
import "../styles/electrohogar.css";

export default function ElectroTecnologia() {
  const toast = useRef(null);

  const [productsPC, setProductsPC] = useState([]);
  const [productsSmart, setProductsSmart] = useState([]);
  const [productsWash, setProductsWash] = useState([]);

  useEffect(() => {
    loadProductsPC();
    loadProductsSmart();
    loadProductsWash();
  }, []);

  const loadProductsPC = async () => {
    try {
      const response = await getProductsByCategory(1);
      setProductsPC(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar los productos",
        life: 3000,
      });
    }
  };

  const loadProductsSmart = async () => {
    try {
      const response = await getProductsByCategory(2);
      setProductsSmart(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar los productos",
        life: 3000,
      });
    }
  };

  const loadProductsWash = async () => {
    try {
      const response = await getProductsByCategory(3);
      setProductsWash(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar los productos",
        life: 3000,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-electro">
            <Toast ref={toast} />
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
