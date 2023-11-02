import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function OrdesForm() {

  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 form-container">
            <form action="" method="">
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_orden"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_orden">Fecha Orden</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_requirimiento"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_requirimiento">Fecha requerido</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_contrato"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_envio">Fecha de envio</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="via_envio"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="via_envio">Via Envio</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="transporte"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="transporte">Transporte</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_envio"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="nombre_envio">Nombre Envio</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_direccion"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="envio_direccion">Dirección</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_region"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="envio_region">Región</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="envio_codigo_postal"
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="envio_codigo_postal">Código Postal</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_pais"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="envio_pais">País</label>
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
