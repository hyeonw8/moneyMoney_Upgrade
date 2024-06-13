import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getItemsAPI = async () => {
  try {
    const response = await api.get('/expenses');

    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}

// Detail page
// ['expense', params.id]; 0, 1번째
export const getItemAPI = async ({queryKey}) => {
  try {
    const response = await api.get(`/expenses/${queryKey[1]}`);

    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}

export const addItemAPI = async ( nextData ) => {
  try {
    await api.post('/expenses', nextData);
  } catch (err) {
    toast.error(err.message);
  }
}

export const deleteItemAPI = async ( id ) => {
  try {
    await api.delete(`/expenses/${id}`, id); 
  } catch (err) {
    toast.error(err.message);
  }
}

export const editItemAPI = async ( updatedData ) => {
  const { id, ...rest } = updatedData; // id는 바뀌지 않고, 다른 항목들은 바뀐다~

  try {
    await api.patch(`/expenses/${id}`, rest); 
  } catch (err) {
    toast.error(err.message);
  }
}




