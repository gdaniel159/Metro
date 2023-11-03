import { TabView, TabPanel } from "primereact/tabview";
import { EmployeesForm } from "../components/EmployeesForm";
import CustomerForm from "../components/CustomerForm";
import CategoriaForm from "../components/CategoriaForm";
import ProductForm from "../components/ProductForm";
import "../styles/main.css";

export default function CreateForm() {
  return (
    <>
      <div className="container mx-5">
        <div
          className="row d-flex justify-content-center align-items-center p-3"
          style={{ height: "100vh" }}
        >
          <div className="col-md-12">
            <h1 className="text-muted text-center mb-3">
              Creacion de registros
            </h1>
            <div className="card">
              <TabView>
                <TabPanel header="Empleados">
                  <EmployeesForm />
                </TabPanel>
                <TabPanel header="Customers">
                  <CustomerForm />
                </TabPanel>
                <TabPanel header="Categories">
                  <CategoriaForm />
                </TabPanel>
                <TabPanel header="Products">
                  <ProductForm />
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
