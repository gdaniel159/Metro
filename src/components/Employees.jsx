import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Employees() {
  const [employees] = useState([
    {
      id: "1",
      nombre: "German Daniel",
      apellido: "Soto Cordova",
      titulo: "Sales Representative",
      titulo_de_cortesia: "Dr",
      fecha_nacimiento: "2003-12-03",
      direccion: "Calle las flores 261",
      ciudad: "Lima",
      region: "Lima",
      codigo_postal: "Lima 07",
      pais: "PERU",
      telefono: "926385755",
      extension: "4541",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DataTable value={employees}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="apellido" header="Apellido"></Column>
              <Column field="titulo" header="Titulo"></Column>
              <Column
                field="titulo_de_cortesia"
                header="Titulo de cortesia"
              ></Column>
              <Column
                field="fecha_nacimiento"
                header="Fecha de nacimiento"
              ></Column>
              <Column field="direccion" header="Direccion"></Column>
              <Column field="ciudad" header="Ciudad"></Column>
              <Column field="region" header="Region"></Column>
              <Column field="codigo_postal" header="Codigo Postal"></Column>
              <Column field="pais" header="Pais"></Column>
              <Column field="telefono" header="Telefono"></Column>
              <Column field="extension" header="Extension"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
