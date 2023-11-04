import { Carousel } from "primereact/carousel";
import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import Carrito from "../page/Carrito";
import "../styles/main.css";
import { useState } from "react";
export default function CardProduct({
  imgSrcSecction,
  descProductSection,
  product,
}) {
  const baseUrl = "http://localhost:8000";

  const [visibleCarrito, setVisibleCarrito] = useState(false);

  const productTemplate = (product) => {
    const imageUrl = `${baseUrl}/${product.photo_path}`;

    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={imageUrl} alt="product" className="w-6 shadow-2" />
        </div>
        <div>
          <p className="mb-1 text-muted">{product.nombre_producto}</p>
          <h6 className="mt-0 mb-3">S/. {product.precio_unidad}</h6>
          <button className="btn btn-warning form-control"
            onClick={() => {
              setVisibleCarrito(true);
            }}
          >
            Agregar
          </button>
        </div>
        <Dialog
          header="Carrito de compras"
          visible={visibleCarrito}
          style={{ width: "50vw" }}
          onHide={() => {
            setVisibleCarrito(false);
          }}
        >
          <Carrito />
        </Dialog>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="col-md-4">
            <img
              src={imgSrcSecction}
              alt="pc-icon"
              className="img-fluid"
              width="70"
            />
            <p>{descProductSection}</p>
            <button className="btnSee">Ver Todo</button>
          </div>
          <div className="col-md-8">
            <Carousel
              value={product}
              numVisible={3}
              numScroll={3}
              itemTemplate={productTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  imgSrcSecction: PropTypes.string.isRequired,
  descProductSection: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};
