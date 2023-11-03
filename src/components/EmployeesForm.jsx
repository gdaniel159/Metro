import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { createEmployees } from "../api/api";

export function EmployeesForm() {

  const toast = useRef(null);
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [titulo, setTitulo] = useState("");
  const [titulo_de_cortesia, setTituloCortesia] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [fecha_contrato, setFechaContrato] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cuidad, setCiudad] = useState("");
  const [region, setRegion] = useState("");
  const [pais, setPais] = useState("");
  const [telefono, setCTelefono] = useState("");
  const [extension, setExtension] = useState("");
  const [notas, setNotas] = useState("");
  const [reportes, setReportes] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  const [setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const createEmployee = async (data) => {
    try {
      const response = await createEmployees(data);
      console.log(response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Empleado Actualizado correctamente",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "No se pudo actualizar los registros",
        life: 3000,
      });
    }
  }

  const handleCreateEmployee = (e) => {
    e.preventDefault();
    const formData = {
      nombre,
      apellido,
      titulo,
      titulo_de_cortesia,
      fecha_nacimiento,
      fecha_contrato,
      direccion,
      cuidad,
      region,
      pais,
      telefono,
      extension,
      notas,
      reportes,
      codigoPostal,
    };
    console.log(formData);
    createEmployee(formData);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 form-container"
            style={{ minHeight: "400px" }}
          >
            <Toast ref={toast} />
            <form action="" method="">
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label htmlFor="nombre">Nombre</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <label htmlFor="apellido">Apellido</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                  <label htmlFor="titulo">Titulo</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo_cortesia"
                    value={titulo_de_cortesia}
                    onChange={(e) => setTituloCortesia(e.target.value)}
                  />
                  <label htmlFor="titulo_cortesia">Titulo de cortesía</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo_cortesia"
                    value={fecha_nacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                  />
                  <label htmlFor="fecha_nacimiento">Fecha Nacimiento</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo_cortesia"
                    value={fecha_contrato}
                    onChange={(e) => setFechaContrato(e.target.value)}
                  />
                  <label htmlFor="fecha_contrato">Fecha Contrato</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                  <label htmlFor="direccion">Dirección</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <InputText
                  id="ciudad"
                  value={cuidad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                  <label htmlFor="region">Región</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="codigo_postal"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                  />
                  <label htmlFor="codigo_postal">Código Postal</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="pais"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                  />
                  <label htmlFor="pais">País</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="number-input"
                    value={telefono}
                    onChange={(e) => setCTelefono(e.target.value)}
                  />
                  <label htmlFor="number-input">Télefono</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="extension"
                    value={extension}
                    onChange={(e) => setExtension(e.target.value)}
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
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="notas"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                  />
                  <label htmlFor="notas">Notas</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="reporte"
                    value={reportes}
                    onChange={(e) => setReportes(e.target.value)}
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
                <Button label="Submit" onClick={handleCreateEmployee} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
