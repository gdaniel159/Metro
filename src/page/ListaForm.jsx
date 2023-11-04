import Employees from "../components/Employees";
import Customers from "../components/Customers";
import Orders from "../components/Orders";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { TabView, TabPanel } from "primereact/tabview";
import MainProvider from "../components/MainProvider";
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
                <MainProvider>
                  <Employees />
                </MainProvider>
              </TabPanel>
              <TabPanel header="Customers">
                <MainProvider>
                  <Customers />
                </MainProvider>
              </TabPanel>
              <TabPanel header="Orders">
                <MainProvider>
                  <Orders />
                </MainProvider>
              </TabPanel>
              <TabPanel header="Categories">
                <MainProvider>
                  <Categories />
                </MainProvider>
              </TabPanel>
              <TabPanel header="Products">
                <MainProvider>
                  <Products />
                </MainProvider>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
