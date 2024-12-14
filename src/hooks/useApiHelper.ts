
import useInterceptor from "./useInterceptor";

const useApiHelper = () => {
  const axios = useInterceptor()

  const api = {
    //authentication
    signUp: (data: any, params = {}) => axios.post(`auth/users/`, data, { params: params }),
    login: (data: any, params = {}) => axios.post('auth/jwt/create/', data, { params: params }),
    getUserType: (params = {}) => axios.get(`auth/users/me/`, { params: params }),
  }

  return api
};

export default useApiHelper;