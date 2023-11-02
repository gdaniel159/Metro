import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function CategoriaUpdate() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const [setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

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
                    id="nombre_categoria"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label htmlFor="nombre_categoria">Nombre Categoría</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="descripcion"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />
                  <label htmlFor="descripcion">Descripción</label>
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
                <Button label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
