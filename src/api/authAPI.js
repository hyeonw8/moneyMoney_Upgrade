import axios from "axios";
import { toast } from "react-toastify";

const AUTH_BASE_URL = import.meta.env.VITE_AT_BASE_URL;
export const AUTH_QUERY_KEY = 'userInfo';

export const api = axios.create({
  baseURL: AUTH_BASE_URL,
});

function getAccessToken() {
  // 로컬 스토리지에서 accessToken 키의 값을 가져옵니다.
  const token = localStorage.getItem('accessToken');
  console.log('스토리지에서 토큰 가져오는 중~')
  // 가져온 값을 반환합니다. 값이 없으면 null을 반환합니다.
  console.log(token);
  return token ? token : [];
}


export const registerAPI = async ( {id, password, nickname }) => {
  try {
    const response = await api.post('/register', {
      id, 
      password,
      nickname,
    });
  
    return response;
  } catch(error) {
    toast.error(error?.response?.data?.message )
  }
}

export const loginAPI = async ( {id, password } ) => {
  try {
    const response = await api.post('/login?expiresIn=30m',
      {
        id,
        password,
      }
    );
    
    return response;
  } catch(error) {
    toast.error(error?.response?.data?.message);
  }
}

export const getUserInfoAPI = async () => {
  // const accessToken = localStorage.getItem('accessToken');
  const accessToken = getAccessToken();
  console.log(accessToken)
  if(accessToken) {
    try {
      const response = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      console.log(response)
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      localStorage.removeItem('accessToken');
    }
  } 
}

export const getUserInfoAPI2 = async () => {
  // const accessToken = localStorage.getItem('accessToken');
  const accessToken = getAccessToken();
  console.log(accessToken)
  // if(accessToken) {
    try {
      const response = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
  //     localStorage.removeItem('accessToken');
  //   }
  // } else {
  //   console.log('토큰 없음')
  // }
    }
}

export const updateProfileAPI = async (formData) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.patch('/profile', formData, {
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`
      } 
    })

    return response;
  } catch(error) {
    toast.error(error?.response?.data?.message);
  }
}
