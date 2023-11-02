import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function OrdesUpdate() {

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [date3, setDate3] = useState(null);
  const [date4, setDate4] = useState(null);
  const [date5, setDate5] = useState(null);

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
                    value={date3}
                    onChange={(e) => setDate3(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_orden">Fecha Orden</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_requirimiento"
                    value={date4}
                    onChange={(e) => setDate4(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_requirimiento">Fecha requerido</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_contrato"
                    value={date5}
                    onChange={(e) => setDate5(e.value)}
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
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />
                  <label htmlFor="transporte">Transporte</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_envio"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                  <label htmlFor="nombre_envio">Nombre Envio</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_direccion"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                  />
                  <label htmlFor="envio_direccion">Dirección</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_region"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />
                  <label htmlFor="envio_region">Región</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="envio_codigo_postal"
                    value={value5}
                    onValueChange={(e) => setValue5(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="envio_codigo_postal">Código Postal</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="envio_pais"
                    value={value6}
                    onChange={(e) => setValue6(e.target.value)}
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
