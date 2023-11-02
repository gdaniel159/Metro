import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { CascadeSelect } from "primereact/cascadeselect";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "../styles/createform.css";

export default function CreateForm() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Creación</h1>
            <form action="" method="">
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="nombre"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="nombre">Nombre</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="apellido"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="apellido">Apellido</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="titulo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="titulo">Titulo</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="titulo_cortesia"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="titulo_cortesia">Titulo de cortesía</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_nacimiento"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                  />
                  <label htmlFor="fecha_nacimiento">Fecha Nacimiento</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <Calendar
                    inputId="fecha_contrato"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                  />
                  <label htmlFor="fecha_contrato">Fecha Contrato</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="direccion"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="direccion">Dirección</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                />
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="region"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="region">Región</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputNumber
                    id="codigo_postal"
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                  />
                  <label htmlFor="codigo_postal">Código Postal</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="pais"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="pais">País</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputNumber
                    id="number-input"
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                  />
                  <label htmlFor="number-input">Télefono</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="extension"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="extension">Extensión</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <label htmlFor="foto">Foto:</label>
                  <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*" // Esto limita la selección a archivos de imagen
                    onChange={(e) => handleFileUpload(e)}
                  />
                </span>
              </div>

              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="notas"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="notas">Notas</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="reporte"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="reporte">Reporte</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <label htmlFor="foto_path">Foto Path:</label>
                  <input
                    type="file"
                    id="foto_path"
                    name="foto_path"
                    accept="image/*" // Esto limita la selección a archivos de imagen
                    onChange={(e) => handleFileUpload(e)}
                  />
                </span>
              </div>

              <div className="card flex justify-content-center">
                <Button label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
