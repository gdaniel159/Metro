import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { createCategories } from "../api/api";
import { Toast } from "primereact/toast";

export default function CategoriaForm() {
  const [nombre_categoria, setNombre_categoria] = useState("");
  const [descripcion, setdescripcion] = useState("");
  // const [foto, setfoto] = useState("");

  const [setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const createCategories = async (data) => {
    try{
      const response = await createCategories(data);
      console.log(response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail:"Categoria Creada correctamente",
        life: 3000,
      });
    } catch(error){
      toast.current.show({
        severity:"error",
        summary:"Error",
        detail:"No se puedo crear la categoria correctamente"
      });
    }
  }
  
  const handleCreateCategoria = (e)=>{
    e.preventDefault();
    const formData={
      nombre_categoria,
      descripcion,
      foto
    };
    console.log(formData);
    createCategories(formData);
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
                    value={nombre_categoria}
                    onChange={(e) => setNombre_categoria(e.target.value)}
                  />
                  <label htmlFor="nombre_categoria">Nombre Categoría</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setdescripcion(e.target.value)}
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
