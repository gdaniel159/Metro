import { InputText } from "primereact/inputtext";
import "../styles/navbar.css";

export default function NavBar() {
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
                  <a className="dropdown-item" href="#">
                    Supermercado
                  </a>
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
                <a href="" className="d-flex flex-column">
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
    </nav>
  );
}
