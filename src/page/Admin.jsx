import { Dock } from "primereact/dock";
import create from "../assets/images/icons/create.png";
import listar from "../assets/images/icons/listar.png";
import cerrar from "../assets/images/icons/cerrar.png";
import { useState } from "react";
import CreateForm from "./CreateForm";
import ListaForm from "./ListaForm";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("admin");

  const navigate = useNavigate();

  const items = [
    {
      label: "Create",
      icon: () => <img alt="Finder" src={create} className="img-fluid" width="70%" />,
      command: () => {
        setActiveSection("create_form");
      },
    },
    {
      label: "Lista",
      icon: () => <img alt="Listar" src={listar} className="img-fluid" width="70%" />,
      command: () => {
        setActiveSection("list_form");
      },
    },
    {
      label: "Cerrar Sesion",
      icon: () => <img alt="Cerrar Sesion" src={cerrar} className="img-fluid" width="70%" />,
      command: () => {
        navigate("/");
      },
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Dock model={items} position="left" />
          </div>
        </div>
        <div className="container">
          {activeSection === "create_form" && <CreateForm />}
          {activeSection === "list_form" && <ListaForm />}
        </div>
      </div>
    </>
  );
}
