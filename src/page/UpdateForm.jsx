import { TabView, TabPanel } from "primereact/tabview";
import { EmployeesUpdate } from "../components/EmployeesUpdate";
import CustomerUpdate from "../components/CustomerUpdate";
import OrdesUpdate from "../components/OrdesUpdate";
import CategoriaUpdate from "../components/CategoriaUpdate";
import ProductUpdate from "../components/ProductUpdate";

export default function UpdateForm() {
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
                <EmployeesUpdate></EmployeesUpdate>
              </TabPanel>
              <TabPanel header="Customers">
                <CustomerUpdate></CustomerUpdate>
              </TabPanel>
              <TabPanel header="Orders">
                <OrdesUpdate></OrdesUpdate>
              </TabPanel>
              <TabPanel header="Categories">
                <CategoriaUpdate></CategoriaUpdate>
              </TabPanel>
              <TabPanel header="Products">
                <ProductUpdate></ProductUpdate>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
