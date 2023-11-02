import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getCategories } from "../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    async function loadCategories() {
      const response = await getCategories();
      setCategories(response.data);
    }
    setTimeout(() => {
      loadCategories();
    }, 1000);
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DataTable value={categories}>
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
