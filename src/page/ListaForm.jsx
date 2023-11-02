import Employees from "../components/Employees";
import Customers from "../components/Customers";
import Orders from "../components/Orders";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { TabView, TabPanel } from "primereact/tabview";
import "../styles/main.css";

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
                <Employees />
              </TabPanel>
              <TabPanel header="Customers">
                <Customers />
              </TabPanel>
              <TabPanel header="Orders">
                <Orders />
              </TabPanel>
              <TabPanel header="Categories">
                <Categories />
              </TabPanel>
              <TabPanel header="Products">
                <Products />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
