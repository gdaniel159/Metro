import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getProducts } from "../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      setProducts(response.data);
    }
    setTimeout(() => {
      loadProducts();
    }, 1000);
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 scrollable-datatable">
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
              <Column field="categoria_id.nombre_categoria" header="Categoria"></Column>
              <Column field="supplier_id.nombre_compañia" header="Supplier"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
