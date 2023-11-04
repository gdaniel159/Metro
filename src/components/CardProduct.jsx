import { Carousel } from "primereact/carousel";
import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import Carrito from "../page/Carrito";
import { createOrders } from "../api/api";
import "../styles/main.css";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
export default function CardProduct({
  imgSrcSecction,
  descProductSection,
  product,
}) {
  const toast = useRef(null);

  const createOrder = async (data) => {
    try {
      const response = await createOrders(data);
      console.log(response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Empleado Actualizado correctamente",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudo actualizar los registros",
        life: 3000,
      });
    }
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const data = {
      fecha_orden: "2023-11-02",
      fecha_requerimiento: "2023-11-02",
      fecha_envio: "2023-11-02",
      via_envio: "Web",
      transporte: "Motorizado",
      nombre_envio: "Envio 1",
      envio_direccion: "Direccion 1",
      envio_region: "Lima",
      envio_codigo_postal: "15313",
      envio_pais: "PE",
    };
    console.log(data);
    createOrder(data);
  };

  const baseUrl = "http://localhost:8000";

  const [visibleCarrito, setVisibleCarrito] = useState(false);

  const productTemplate = (product) => {
    const imageUrl = `${baseUrl}/${product.photo_path}`;

    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <Toast ref={toast} />
        <div className="mb-3">
          <img src={imageUrl} alt="product" className="w-6 shadow-2" />
        </div>
        <div>
          <p className="mb-1 text-muted">{product.nombre_producto}</p>
          <h6 className="mt-0 mb-3">S/. {product.precio_unidad}</h6>
          <Button
            label="Agregar"
            className="btn btn-warning form-control"
            onClick={(e) => {
              setVisibleCarrito(true);
              handleCreateOrder(e);
            }}
          />
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
