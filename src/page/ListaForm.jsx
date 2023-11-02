import Employees from "../components/Employees";
import Customers from "../components/Customers";
import Orders from "../components/Ordes";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { TabView, TabPanel } from "primereact/tabview";
import { Menubar } from "primereact/menubar";
import "../styles/main.css";

export default function CreateForm() {
  const items = [
    {
      label: "Delete",
      icon: "pi pi-trash",
    },
  ];

  return (
    <>
      <div className="container mx-5">
        <div
          className="row d-flex justify-content-center align-items-center p-3"
          style={{ height: "100vh" }}
        >
          <Menubar model={items} />
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
