import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import "../styles/navbar.css";
import "../styles/login.css";

export default function NavBar() {
  const navigate = useNavigate();

  const toast = useRef(null);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Credenciales Incorrectas",
      life: 3000,
    });
  };

  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await login(formData);
      
      if (
        response.data.message === "Inicio de sesión exitoso" ||
        response.data.verification_code === 1
      ) {
        navigate("/intranet/admin");
      } else {
        console.log("Credenciales Incorrectas");
      }
    
    } catch (error) {
      showError();
    }
  };

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
          <div
            className="row d-flex justify-content-center align-items-center flex-column"
            style={{ height: "80vh" }}
          >
            <h2 className="title-login">Inicio de Sesión y Registro</h2>
            <div className="col-md-12 mt-5">
              <div className="col-md-6 m-auto">
                <div className="card p-4">
                  <Toast ref={toast} />
                  <form id="login" className="login-form active">
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="correo">Correo</label>
                      <InputText
                        id="email"
                        name="email"
                        aria-describedby="email-help-login"
                        keyfilter="email"
                        placeholder="Ingrese Correo"
                        value={formData.correo}
                        onChange={handleChange}
                      />
                      <small id="correo-help">
                        Ingresa tu correo electronico.
                      </small>
                    </div>
                    <div className="flex flex-column gap-2 mb-3">
                      <label htmlFor="password">Contraseña</label>
                      <Password
                        feedback={false}
                        tabIndex={1}
                        placeholder="Contraseña"
                        toggleMask
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                      />
                      <small id="password-help">Ingresa tu contraseña.</small>
                    </div>
                    <Button
                      label="Iniciar Sesion"
                      className="btn btn-primary mb-3 form-control"
                      onClick={handleLogin}
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
