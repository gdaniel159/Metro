import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getOrders } from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function loadOrders() {
      const response = await getOrders();
      setOrders(response.data);
    }
    setTimeout(() => {
      loadOrders();
    }, 1000);
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
            <DataTable value={orders} style={{ minHeight: "400px" }}>
              <Column field="id" header="ID"></Column>
              <Column field="fecha_orden" header="Fecha de Orden"></Column>
              <Column
                field="fecha_requerimiento"
                header="Fecha de Requerimiento"
              ></Column>
              <Column field="via_envio" header="Via Envio"></Column>
              <Column field="transporte" header="Transporte"></Column>
              <Column field="nombre_envio" header="Nombre Envio"></Column>
              <Column field="envio_direccion" header="Direccion"></Column>
              <Column field="envio_region" header="Region"></Column>
              <Column
                field="envio_codigo_postal"
                header="Codigo Postal"
              ></Column>
              <Column field="envio_pais" header="Pais"></Column>
              <Column field="customer" header="Customer"></Column>
              <Column field="employee" header="Employee"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
