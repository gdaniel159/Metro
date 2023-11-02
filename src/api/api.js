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

// Structure //

/*

  export const storeSomething = (newSomething) => {
    return metroAPI.post(`/customer/create`,newSomething);
  }

*/

// == PUT == //

// Structure //

/*

  export const updateSomething = (id, updatedData) => {
    return metroAPI.put(`/customer/update/${id}`,updatedData);
  }

*/

// == DELETE == //

// Structure //

/*

  export const deleteSomething = (id) => {
    return metroAPI.delete(`/customer/delete/${id}`);
  }

*/

// == LOGIN == //

export const login = (userData) => {
  return metroAPI.post("user/login", userData);
};
