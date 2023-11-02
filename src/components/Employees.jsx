import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getEmployees } from "../api/api";

export default function Employees() {

  const [employees, setEmployees] = useState([]);

  useEffect(() =>{
    async function loadEmployees() {
      const response = await getEmployees();
      setEmployees(response.data);
    }
    setTimeout(() => {
      loadEmployees();
    }, 1000);
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
            <DataTable value={employees} style={{ minHeight: "400px" }}>
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
              <Column field="fecha_contrato" header="Fecha Contrato" ></Column>
              <Column field="direccion" header="Direccion"></Column>
              <Column field="cuidad" header="Ciudad"></Column>
              <Column field="region" header="Region"></Column>
              <Column field="codigo_postal" header="Codigo Postal"></Column>
              <Column field="pais" header="Pais"></Column>
              <Column field="telefono" header="Telefono"></Column>
              {/* <Column field="extension" header="Extension"></Column> */}
              {/* <Column field="foto" header="Foto"></Column> */}
              {/* <Column field="notas" header="Notas"></Column> */}
              <Column field="reportes" header="Reportes"></Column>
              {/* <Column field="foto_path" header="Foto"></Column> */}
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
