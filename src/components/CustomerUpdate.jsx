import { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { getCustomer } from "../api/api";
import { useMainContext } from "./MainProvider";

export default function CustomerUpdate() {
  const toast = useRef(null);

  const { selectedCustomerId } = useMainContext();

  const [nombreCompañia, setNombreCompañia] = useState("");
  const [nombreContacto, setNombreContacto] = useState("");
  const [tituloContacto, setTituloContacto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cuidad, setCuidad] = useState("");
  const [region, setRegion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [pais, setPais] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fax, setFax] = useState("");

  useEffect(() => {
    loadCustomer();
  },[])

  const loadCustomer = async () => {
    try {
      const response = await getCustomer(selectedCustomerId);
      setNombreCompañia(response.data.nombre_compañia);
      setNombreContacto(response.data.nombre_contacto);
      setTituloContacto(response.data.titulo_contacto);
      setDireccion(response.data.direccion);
      setCuidad(response.data.cuidad);
      setRegion(response.data.region);
      setCodigoPostal(response.data.codigo_postal);
      setPais(response.data.pais);
      setTelefono(response.data.telefono);
      setFax(response.data.fax);
    } catch (error) {
      if (toast.current) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "No se pudo cargar el empleado",
          life: 3000,
        });
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 form-container">
            <Toast ref={toast} />
            <form action="#" method="">
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_compania"
                    value={nombreCompañia}
                    onChange={(e) => setNombreCompañia(e.target.value)}
                  />
                  <label htmlFor="nombre_compania">Nombre Compañía</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="nombre_contacto"
                    value={nombreContacto}
                    onChange={(e) => setNombreContacto(e.target.value)}
                  />
                  <label htmlFor="nombre_contacto">Nombre Contacto</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="titulo"
                    value={tituloContacto}
                    onChange={(e) => setTituloContacto(e.target.value)}
                  />
                  <label htmlFor="titulo">Titulo Contacto</label>
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
                <div className="p-float-label">
                  <InputText
                    id="ciudad"
                    value={cuidad}
                    onChange={(e) => setCuidad(e.target.value)}
                  />
                  <label htmlFor="direccion">Ciudad</label>
                </div>
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
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  <label htmlFor="number-input">Télefono</label>
                </span>
              </div>
              <div className="card flex justify-content-center mb-5 mt-5">
                <span className="p-float-label">
                  <InputText
                    id="fax"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                  />
                  <label htmlFor="fax">Fax</label>
                </span>
              </div>

              <div className="card flex justify-content-center mb-5 mt-5">
                <Button label="Actualizar Registros" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
