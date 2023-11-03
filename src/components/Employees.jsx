import { useState, useEffect, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getEmployees } from "../api/api";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import EmployeesUpdate from "./EmployeesUpdate";
import { deleteEmployees } from "../api/api";
import { EmployeeContext } from "./EmployeeProvider";


export default function Employees() {
  const toast = useRef(null);

  const { setSelectedEmployeeId } = useContext(EmployeeContext);

  const [visible, setVisible] = useState(false);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar los empleados",
        life: 3000,
      });
    }
  };

  const deleteEmployee = async (employee) => {
    try {
      await deleteEmployees(employee.id);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Empleado Eliminado correctamente",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Message Content",
        life: 3000,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
            <Toast ref={toast} />
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
              <Column field="fecha_contrato" header="Fecha Contrato"></Column>
              <Column field="direccion" header="Direccion"></Column>
              <Column field="cuidad" header="Ciudad"></Column>
              <Column field="region" header="Region"></Column>
              <Column field="codigo_postal" header="Codigo Postal"></Column>
              <Column field="pais" header="Pais"></Column>
              <Column field="telefono" header="Telefono"></Column>
              <Column field="reportes" header="Reportes"></Column>
              <Column
                header="Eliminar"
                body={(rowData) => (
                  <>
                    <Button
                      label="Eliminar"
                      icon="pi pi-trash"
                      onClick={() => deleteEmployee(rowData)}
                      className="p-button-danger"
                    />
                    <Button
                      label="Editar"
                      icon="pi pi-pencil"
                      className="p-button-warning w-100 mt-2"
                      onClick={() => {
                        setSelectedEmployeeId(rowData.id), setVisible(true);
                      }}
                    />
                    <Dialog
                      header="Actualizar Empleados"
                      visible={visible}
                      style={{ width: "50vw" }}
                      onHide={() => {
                        setVisible(false);
                        setSelectedEmployeeId(null);
                      }}
                    >
                      <EmployeesUpdate />
                    </Dialog>
                  </>
                )}
                className="text-center"
              />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
