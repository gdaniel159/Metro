import { Button } from "primereact/button";
import CustomerForm from "../components/CustomerForm";


export default function Carrito() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Datos el cliente</h2>
            <CustomerForm />
          </div>
          <div className="card flex justify-content-center mb-5 mt-5">
            <Button label="Comprar"/>
          </div>
        </div>
      </div>
    </>
  );
}
