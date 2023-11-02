import { TabView, TabPanel } from "primereact/tabview";
import EmployeesUpdate from "../components/EmployeesUpdate";
import CustomerUpdate from "../components/CustomerUpdate";
import OrdesUpdate from "../components/OrdesUpdate";
import CategoriaUpdate from "../components/CategoriaUpdate";
import ProductUpdate from "../components/ProductUpdate";
import "../styles/main.css";

export default function UpdateForm() {
  return (
    <>
      <div className="container mx-5">
        <div
          className="row d-flex justify-content-center align-items-center p-3"
          style={{ height: "100vh" }}
        >
          <div className="col-md-12">
            <h1 className="text-muted text-center mb-3">Actualizacion de registros</h1>
            <div className="card">
              <TabView>
                <TabPanel header="Empleados">
                  <EmployeesUpdate />
                </TabPanel>
                <TabPanel header="Customers">
                  <CustomerUpdate />
                </TabPanel>
                <TabPanel header="Orders">
                  <OrdesUpdate />
                </TabPanel>
                <TabPanel header="Categories">
                  <CategoriaUpdate />
                </TabPanel>
                <TabPanel header="Products">
                  <ProductUpdate />
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
