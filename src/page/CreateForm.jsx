import { TabView, TabPanel } from "primereact/tabview";
import { EmployeesForm } from "../components/EmployeesForm";

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
              <TabPanel header="Customers"></TabPanel>
              <TabPanel header="Orders"></TabPanel>
              <TabPanel header="Categories"></TabPanel>
              <TabPanel header="Products"></TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  );
}
