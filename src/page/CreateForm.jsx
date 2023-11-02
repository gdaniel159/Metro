import { TabView, TabPanel } from "primereact/tabview";
import { EmployeesForm } from "../components/EmployeesForm";
import CustomerForm from "../components/CustomerForm";
import OrdesForm from "../components/OrdesForm";
import CategoriaForm from "../components/CategoriaForm";
import "../styles/main.css";
import ProductForm from "../components/ProductForm";

export default function CreateForm() {
  return (
    <>
      <div className="container mx-5">
        <div
          className="row d-flex justify-content-center align-items-center p-3"
          style={{ height: "100vh" }}
        >
          <div className="card">
            <TabView>
              <TabPanel header="Empleados">
                <EmployeesForm />
              </TabPanel>
              <TabPanel header="Customers">
                <CustomerForm />
              </TabPanel>
              <TabPanel header="Orders">
                <OrdesForm />
              </TabPanel>
              <TabPanel header="Categories">
                <CategoriaForm />
              </TabPanel>
              <TabPanel header="Products">
                <ProductForm></ProductForm>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
