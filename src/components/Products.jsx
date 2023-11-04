import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { getProducts } from "../api/api";

export default function Products() {
  const toast = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudieron cargar las ordenes",
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
            <DataTable value={products} style={{ minHeight: "400px" }}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre_producto" header="Nombre Producto"></Column>
              <Column field="cantidad_unidad" header="Unidades"></Column>
              <Column field="nombre_categoria" header="Categoria"></Column>
              <Column field="precio_unidad" header="Precio Unitario"></Column>
              <Column field="unidades_stock" header="Stock"></Column>
              <Column field="unidades_orden" header="Orden"></Column>
              <Column field="reorden_nivel" header="ReOrden Nivel"></Column>
              <Column field="estado" header="Estado"></Column>
              <Column
                field="categories.nombre_categoria"
                header="Categoria"
              ></Column>
              <Column
                field="suppliers.nombre_compañia"
                header="Supplier"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
