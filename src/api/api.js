import axios from "axios";

const metroAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// == GET == //

export const getCategories = () => {
  return metroAPI.get("categories/get");
};

export const getEmployees = () => {
  return metroAPI.get("employees/get");
};

export const getEmployeesxID = (id) => {
  return metroAPI.get(`employeeid/getEmployee/${id}`);
};

export const getCustomers = () => {
  return metroAPI.get("customers/get");
};

export const getCustomer = (id) => {
  return metroAPI.get(`customers/get/${id}`);
};

export const getOrders = () => {
  return metroAPI.get("orders/get");
};

export const getProducts = () => {
  return metroAPI.get("products/get");
};

export const getProductsByCategory = (category_id) => {
  return metroAPI.get(`products/get/category/${category_id}`);
};

export const getProductImage = (image_path) => {
  return metroAPI.get(`products/image/get/${image_path}`);
}

// == POST == //

// Structure //

export const createCategories = (newCategoria) => {
  return metroAPI.post(`categories/create`, newCategoria);
};

export const createEmployees = (newEmployees) => {
  return metroAPI.post(`employees/create`, newEmployees);
};

export const createCustomers = (newCustomers) => {
  return metroAPI.post(`customers/create`, newCustomers);
};

export const createOrders = (newOrders) => {
  return metroAPI.post(`orders/create`, newOrders);
};

export const createOrdersDetail = (newOrdersDetail) => {
  return metroAPI.post(`orders_details/create`, newOrdersDetail);
}

export const createProducts = (newProducts) => {
  return metroAPI.post(`products/create`, newProducts);
};
/*

  export const storeSomething = (newSomething) => {
    return metroAPI.post(`/customer/create`,newSomething);
  }

*/

// == PUT == //

// Structure //

export const updateCategories = (id, updateCategories) => {
  return metroAPI.put(`categories/udpate/${id}`, updateCategories);
};

export const updateEmployees = (id, updateEmployees) => {
  return metroAPI.put(`employees/update/${id}`, updateEmployees);
};

export const updateCustomers = (id, updateCustomers) => {
  return metroAPI.put(`customers/update/${id}`, updateCustomers);
};

export const updateOrders = (id, updateOrders) => {
  return metroAPI.put(`orders/update/${id}`, updateOrders);
};

export const updateProducts = (id, updateProducts) => {
  return metroAPI.put(`products/update/${id}`, updateProducts);
};

/*

  export const updateSomething = (id, updatedData) => {
    return metroAPI.put(`/customer/update/${id}`,updatedData);
  }

*/

// == DELETE == //

// Structure //

export const deleteCategories = (id) => {
  return metroAPI.delete(`categories/delete/${id}`);
};

export const deleteEmployees = (id) => {
  return metroAPI.delete(`employees/delete/${id}`);
};

export const deleteCustomers = (id) => {
  return metroAPI.delete(`customers/delete/${id}`);
};

export const deleteOrders = (id) => {
  return metroAPI.delete(`orders/delete/${id}`);
};

export const deleteProducts = (id) => {
  return metroAPI.delete(`products/delete/${id}`);
};

/*

  export const deleteSomething = (id) => {
    return metroAPI.delete(`/customer/delete/${id}`);
  }

*/

// == LOGIN == //

export const login = (userData) => {
  return metroAPI.post("user/login", userData);
};
