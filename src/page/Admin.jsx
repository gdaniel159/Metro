import { Dock } from "primereact/dock";
import create from "../assets/images/icons/create.png";
import update from "../assets/images/icons/update.png";
import delete_icon from "../assets/images/icons/delete.png";
import listar from "../assets/images/icons/listar.png";
import cerrar from "../assets/images/icons/cerrar.png";
import { useState } from "react";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import ListaForm from "./ListaForm";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("admin");

  const navigate = useNavigate();

  const items = [
    {
      label: "Create",
      icon: () => <img alt="Finder" src={create} width="100%" />,
      command: () => {
        setActiveSection("create_form");
      },
    },
    {
      label: "Update",
      icon: () => <img alt="App Store" src={update} width="100%" />,
      command: () => {
        setActiveSection("update_form");
      },
    },
    {
      label: "Delete",
      icon: () => <img alt="Photos" src={delete_icon} width="100%" />,
      command: () => {
        setActiveSection("delete_form");
      },
    },
    {
      label: "Lista",
      icon: () => <img alt="Listar" src={listar} width="100%" />,
      command: () => {
        setActiveSection("list_form");
      },
    },
    {
      label: "Cerrar Sesion",
      icon: () => <img alt="Cerrar Sesion" src={cerrar} width="100%" />,
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
          {activeSection === "update_form" && <UpdateForm />}
          {activeSection === "delete_form" && <DeleteForm />}
          {activeSection === "list_form" && <ListaForm />}
        </div>
      </div>
    </>
  );
}
