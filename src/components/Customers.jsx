import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getCustomers } from "../api/api";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    async function loadCustomers() {
      const response = await getCustomers();
      setCustomers(response.data);
    }
    setTimeout(() => {
      loadCustomers();
    }, 2000);
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
            <DataTable value={customers} style={{ minHeight: "400px" }}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre_compañia" header="Compañia"></Column>
              <Column field="nombre_contacto" header="Representante"></Column>
              <Column field="titulo_contacto" header="Titulo Contacto"></Column>
              <Column field="direccion" header="Direccion"></Column>
              <Column field="ciudad" header="Ciudad"></Column>
              <Column field="region" header="Region"></Column>
              <Column field="codigo_postal" header="Codigo Postal"></Column>
              <Column field="pais" header="Pais"></Column>
              <Column field="telefono" header="Telefono"></Column>
              {/* <Column field="fax" header="Fax"></Column> */}
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
