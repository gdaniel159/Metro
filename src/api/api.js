import axios from "axios";

const metroAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// == GET == //

export const getCategories = () => {
  return metroAPI.get('categories/get');
}

export const getEmployees = () => {
  return metroAPI.get('employees/get');
}

export const getCustomers = () => {
  return metroAPI.get('customers/get');
}

export const getOrders = () => {
  return metroAPI.get('orders/get');
}

export const getProducts = () => {
  return metroAPI.get('products/get');
}

// == POST == //

// == PUT == //

// == DELETE == //

// == LOGIN == //

export const login = (userData) => {
  return metroAPI.post("user/login", userData);
};
