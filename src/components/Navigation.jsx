import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

export default function NavBar() {

  const [valuePassLog, setValuePassLog] = useState("");

  const [visible, setVisible] = useState(false);

  const showSidebar = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img
            src="https://metroio.vtexassets.com/assets/vtex/assets-builder/metroio.store-theme/13.0.46/svg/logo-metro___19ecf64e9f98f0564f96d3856f640d6c.svg"
            alt="BrandMetro"
            width="75"
            height="75"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center w-100">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electro_hogar" className="dropdown-item">
                    Electro Hogar
                  </Link>
                </li>
                <li>
                  <Link to="/super_mercado" className="dropdown-item">
                    Super Mercado
                  </Link>
                </li>
                <li>
                  <Link to="/hogar_bazar" className="dropdown-item">
                    Hogar y Bazar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item w-5">
              <span className="p-input-icon-left w-100">
                <i className="pi pi-search" />
                <InputText placeholder="¿Qué buscas hoy?" className="w-100" />
              </span>
            </li>
            <li className="nav-item text-center flex">
              <div>
                <a href="" className="mx-4 d-flex flex-column">
                  <i className="pi pi-book" />
                  <small>Mi lista</small>
                </a>
              </div>
              <div>
                <a href="" className="d-flex flex-column" onClick={showSidebar}>
                  <i className="pi pi-user" />
                  <small>Mi Cuenta</small>
                </a>
              </div>
              <div>
                <a href="" className="mx-4 d-flex flex-column">
                  <i className="pi pi-shopping-cart" />
                  <small>Carrito</small>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Login */}
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center flex-column" style={{height:"80vh"}}>
            <h2 className="title-login">Inicio de Sesión y Registro</h2>
            <div className="col-md-12 mt-5">
              <div className="col-md-6 m-auto">
                <div className="card p-4">
                  <form id="login" className="login-form active">
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="correo">Correo</label>
                      <InputText id="correo" aria-describedby="correo-help" />
                      <small id="correo-help">
                        Ingresa tu correo electronico.
                      </small>
                    </div>
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="password">Contraseña</label>
                      <Password
                        value={valuePassLog}
                        onChange={(e) => setValuePassLog(e.target.value)}
                        feedback={false}
                        tabIndex={1}
                      />
                      <small id="password-help">Ingresa tu contraseña.</small>
                    </div>
                    <input
                      type="submit"
                      value="Iniciar Sesión"
                      className="btn btn-primary form-control"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </nav>
  );
}
