import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Customers() {
  const [customers] = useState([
    {
      id: "1",
      nombre_compañia: "Ford Motors Company",
      nombre_contacto: "Soto Cordova",
      titulo_contacto: "Ford",
      direccion: "Calle Las Begonias",
      ciudad: "San Martin de Porres",
      region: "Lima",
      codigo_postal: "Lima 05",
      pais: "PERU",
      telefono: "926385755",
      fax: "125412",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DataTable value={customers}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre_compañia" header="Compañia"></Column>
              <Column field="nombre_contacto" header="Representante"></Column>
              <Column field="titulo_contacto" header="Titulo Contacto"></Column>
              <Column
                field="direccion"
                header="Direccion"
              ></Column>
              <Column
                field="ciudad"
                header="Ciudad"
              ></Column>
              <Column field="region" header="Region"></Column>
              <Column field="codigo_postal" header="Codigo Postal"></Column>
              <Column field="pais" header="Pais"></Column>
              <Column field="telefono" header="Telefono"></Column>
              <Column field="fax" header="Fax"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
