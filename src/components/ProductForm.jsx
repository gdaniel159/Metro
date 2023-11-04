import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

import { createProducts } from "../api/api";
import { Toast } from "primereact/toast";

export default function ProductForm() {
  
  const [nombre_producto, setNombre_producto] = useState("");
  const [cantidad_unidad, setCantidad_Unidad] = useState("");
  const [nombre_categoria, setNombre_categoria] = useState("");
  const [precio_unidad, setPrecio_Unidad] = useState("");
  const [unidades_stock, setUnidades_stock] = useState("");
  const [unidades_orden, setUnidades_orden] = useState("");
  const [reorden_nivel, setReorden_nivel] = useState("");
  const [estado, setEstado] = useState("");

  const createProducto = async (data) => {
    try{
      const response = await createProducto(data);
      console.log(response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail:"Producto creado correctamente",
        life: 3000,
      });
    } catch(error){
      toast.current.show({
        severity:"error",
        summary:"Error",
        detail:"No se puedo crear el producto correctamente"
      });
    }
  }

  const handleCreateProducto = (e) =>{
    e.preventDefault();
    const formData = {
      nombre_producto,
      cantidad_unidad,
      nombre_categoria,
      precio_unidad,
      unidades_stock,
      unidades_orden,
      reorden_nivel,
      estado
    };
    console.log(formData);
    createProducto(formData);
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 form-container">
            <form action="" method="">

              {/* NOMBRE DE PRODUCTO */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_producto"
                    value={nombre_producto}
                    onChange={(e) => setNombre_producto(e.target.value)}
                  />
                  <label htmlFor="nombre_producto">Producto</label>
                </span>
              </div>

              {/* UNIDADES DE PRODUCTO */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="cantidad_unidad"
                    value={cantidad_unidad}
                    onValueChange={(e) => setCantidad_Unidad(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="cantidad_unidad">Unidades</label>
                </span>
              </div>

              {/* NOMBRE DE CATEGORIA */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_categoria"
                    value={nombre_categoria}
                    onChange={(e) => setNombre_categoria(e.target.value)}
                  />
                  <label htmlFor="nombre_categoria">Categoría</label>
                </span>
              </div>

              {/* PRECIO UNIDAD*/}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    inputId="currency-us"
                    value={precio_unidad}
                    onValueChange={(e) => setPrecio_Unidad(e.value)}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    className="w-full"
                  />
                  <label htmlFor="precio_unidad">Precio/Unidades</label>
                </span>
              </div>

              {/* UNIDADES POR STOCK */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="unidades_stock"
                    value={unidades_stock}
                    onChange={(e) => setUnidades_stock(e.target.value)}
                  />
                  <label htmlFor="unidades_stock">Stock</label>
                </span>
              </div>

              {/* UNIDADES POR ORDEN */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="unidades_orden"
                    value={unidades_orden}
                    onValueChange={(e) => setUnidades_orden(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="unidades_orden">Unidades Orden</label>
                </span>
              </div>

              {/* REORDEN DE NIVEL */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="reorden_nivel"
                    value={reorden_nivel}
                    onChange={(e) => setReorden_nivel(e.target.value)}
                  />
                  <label htmlFor="reorden_nivel">Reorden Nivel</label>
                </span>
              </div>

              {/* ESTADO DE PRODUCTO */}
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                  <label htmlFor="estado">Estado</label>
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <Button label="Submit" onClick={handleCreateProducto}/>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  );
}
