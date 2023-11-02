import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function ProductForm() {
  
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 form-container">
            <form action="" method="">
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_producto"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="nombre_producto">Producto</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="cantidad_unidad"
                    value={value1}
                    onValueChange={(e) => setValue1(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="cantidad_unidad">Unidades</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_categoria"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                  <label htmlFor="nombre_categoria">Categoría</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    inputId="currency-us"
                    value={value3}
                    onValueChange={(e) => setValue3(e.value)}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    className="w-full"
                  />
                  <label htmlFor="precio_unidad">Precio/Unidades</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="unidades_stock"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />
                  <label htmlFor="unidades_stock">Stock</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="unidades_orden"
                    value={value5}
                    onValueChange={(e) => setValue5(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="unidades_orden">Unidades Orden</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="reorden_nivel"
                    value={value6}
                    onChange={(e) => setValue6(e.target.value)}
                  />
                  <label htmlFor="reorden_nivel">Reorden Nivel</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="estado"
                    value={value7}
                    onChange={(e) => setValue7(e.target.value)}
                  />
                  <label htmlFor="estado">Estado</label>
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <Button label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
