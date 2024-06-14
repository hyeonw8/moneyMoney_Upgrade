import axios from "axios";
import { toast } from "react-toastify";

const JSON_SERVER_BASE_URL = import.meta.env.VITE_DATA_BASE_URL;

export const api = axios.create({
  baseURL: JSON_SERVER_BASE_URL,
});

export const getItemsAPI = async () => {
  try {
    const response = await api.get('/expenses');

    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}

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
  const { id, ...rest } = updatedData; 

  try {
    await api.patch(`/expenses/${id}`, rest); 
  } catch (err) {
    toast.error(err.message);
  }
}




