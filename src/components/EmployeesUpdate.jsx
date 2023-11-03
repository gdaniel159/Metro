import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export default function EmployeesUpdate({ employeeID }) {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");

  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleActualizar = (e) => {
    e.preventDefault();
    console.log(employeeID);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 form-container"
            style={{ minHeight: "400px" }}
          >
            <form action="" method="">
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="nombre">Nombre</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="apellido"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />
                  <label htmlFor="apellido">Apellido</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                  <label htmlFor="titulo">Titulo</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo_cortesia"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                  />
                  <label htmlFor="titulo_cortesia">Titulo de cortesía</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_nacimiento"
                    value={date1}
                    onChange={(e) => setDate1(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_nacimiento">Fecha Nacimiento</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_contrato"
                    value={date2}
                    onChange={(e) => setDate2(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="fecha_contrato">Fecha Contrato</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="direccion"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />
                  <label htmlFor="direccion">Dirección</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                />
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="region"
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                  />
                  <label htmlFor="region">Región</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="codigo_postal"
                    value={value6}
                    onValueChange={(e) => setValue6(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="codigo_postal">Código Postal</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="pais"
                    value={value7}
                    onChange={(e) => setValue7(e.target.value)}
                  />
                  <label htmlFor="pais">País</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputNumber
                    id="number-input"
                    value={value8}
                    onValueChange={(e) => setValue8(e.value)}
                    className="w-full"
                  />
                  <label htmlFor="number-input">Télefono</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="extension"
                    value={value9}
                    onChange={(e) => setValue9(e.target.value)}
                  />
                  <label htmlFor="extension">Extensión</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <label htmlFor="foto" className="mb-2">
                  Foto:
                </label>
                <span className="p-float-label">
                  <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*" // Esto limita la selección a archivos de imagen
                    onChange={(e) => handleFileUpload(e)}
                  />
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="notas"
                    value={value10}
                    onChange={(e) => setValue10(e.target.value)}
                  />
                  <label htmlFor="notas">Notas</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="reporte"
                    value={value11}
                    onChange={(e) => setValue11(e.target.value)}
                  />
                  <label htmlFor="reporte">Reporte</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <label htmlFor="foto_path" className="mb-2">
                  Foto Path:
                </label>
                <span className="p-float-label">
                  <input
                    type="file"
                    id="foto_path"
                    name="foto_path"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <Button label="Submit" onClick={handleActualizar} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
