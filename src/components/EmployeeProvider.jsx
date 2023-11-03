import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const EmployeeContext = createContext();

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export default function EmployeeProvider({ children }) {

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

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

  return (
    <EmployeeContext.Provider
      value={{ selectedEmployeeId, setSelectedEmployeeId, employeeData, setEmployeeData }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: PropTypes.node, // Declara children como una propiedad esperada
};
