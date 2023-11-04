import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const [employeeData, setEmployeeData] = useState({
    nombre: null,
    apellido: null,
    titulo: null,
    titulo_de_cortesia: null,
    fecha_nacimiento: null,
    fecha_contrato: null,
    direccion: null,
    cuidad: null,
    region: null,
    codigo_postal: null,
    pais: null,
    telefono: null,
    foto: null,
    notas: null,
    reportes: null,
  });

  const [productData, setProductData] = useState({
    nombre_producto: null,
    categoria_id: null,
    supplier_id: null,
    cantidad_unidad: null,
    unidades_stock: null,
    unidades_orden: null,
    reorden_nivel: null,
    estado: null,
  });

  const [customerData, setCustomerData] = useState({
    nombre_compañia: null,
    nombre_contacto: null,
    titulo_contacto: null,
    direccion: null,
    cuidad: null,
    region: null,
    codigo_postal: null,
    pais: null,
    telefono: null,
    fax: null,
  });

  const [ ordersData, setOrdersData ] = useState({
    fecha_orden : null,
    fecha_requerimiento : null,
    fecha_envio : null,
    via_envio : null,
    transporte : null,
    nombre_envio : null,
    envio_direccion : null,
    envio_region : null,
    envio_codigo_postal : null,
    envio_pais : null,
  })

  return (
    <MainContext.Provider
      value={{
        selectedEmployeeId,
        setSelectedEmployeeId,
        employeeData,
        setEmployeeData,
        productData,
        setProductData,
        customerData,
        setCustomerData,
        ordersData,
        setOrdersData,
        selectedCustomerId,
        setSelectedCustomerId
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node, // Declara children como una propiedad esperada
};
