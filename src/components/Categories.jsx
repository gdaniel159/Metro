import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { getCategories } from "../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const toast = useRef(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar las categorias",
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
            <DataTable value={categories} style={{ minHeight: "400px" }}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre_categoria" header="Categoria"></Column>
              <Column field="descripcion" header="Descripcion"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
