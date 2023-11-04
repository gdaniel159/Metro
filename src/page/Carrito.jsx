import { Button } from "primereact/button";
import CustomerForm from "../components/CustomerForm";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { createOrdersDetail } from "../api/api";

export default function Carrito() {
  const toast = useRef(null);

  const createOrderDetailsIntegration = async (data) => {
    try {
      const response = await createOrdersDetail(data);
      console.log(response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Detalle de orden creado correctamente",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se puede crear el detalle de orden",
        life: 3000,
      });
    }
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const data = {
      precio_unitario: "949.00",
      cantidad: "1",
      producto_id : 1,
      order_id : 1
    };
    console.log(data);
    createOrderDetailsIntegration(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Toast ref={toast} />
            <h2>Datos el cliente</h2>
            <CustomerForm />
          </div>
          <div className="card flex justify-content-center mb-5 mt-5">
            <Button label="Comprar" onClick={handleCreateOrder} />
          </div>
        </div>
      </div>
    </>
  );
}
