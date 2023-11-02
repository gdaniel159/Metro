import Employees from "../components/Employees";
import Customers from "../components/Customers";
import { TabView, TabPanel } from "primereact/tabview";

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
              <TabPanel header="Categories"></TabPanel>
              <TabPanel header="Products"></TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
