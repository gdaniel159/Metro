import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import CustomerUpdate from "./CustomerUpdate";
import { getCustomers } from "../api/api";
import { deleteCustomers } from "../api/api";

export default function Customers() {
  const toast = useRef(null);

  const [visible, setVisible] = useState(false);

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const response = await getCustomers();
      setCustomers(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar los empleados",
        life: 3000,
      });
    }
  };

  const deleteCustomer = async (customers) => {
    try {
      await deleteCustomers(customers.id);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Cliente Eliminado correctamente",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error al eliminar cliente",
        life: 3000,
      });
    }
  };

  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
            <Toast ref={toast} />
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
              <Column
                header="Eliminar"
                body={(rowData) => (
                  <>
                    <Button
                      label="Eliminar"
                      icon="pi pi-trash"
                      onClick={() => deleteCustomer(rowData)}
                      className="p-button-danger"
                    />
                    <Button
                      label="Editar"
                      icon="pi pi-pencil"
                      className="p-button-warning w-100 mt-2"
                      onClick={() => setVisible(true)}
                    />
                    <Dialog
                      header="Actualizar Clientes"
                      visible={visible}
                      style={{ width: "50vw" }}
                      onHide={() => setVisible(false)}
                      footer={footerContent}
                    >
                      <CustomerUpdate />
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
