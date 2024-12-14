import axios, { AxiosHeaders } from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


export const NEXT_PUBLIC_APP_API_URL = process.env.NEXT_PUBLIC_APP_API_URL || 'http://127.0.0.1:8000/api/v1/';

/**
 * It deletes all cookies by iterating over all cookies and setting their expiration date to a date in the past
 */
export const deleteAllCookies = () => {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};

const useInterceptor = () => {

  const instance = axios.create({
    baseURL: NEXT_PUBLIC_APP_API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Cache-Control': 'max-age=0'
    }
  });

  instance.interceptors.request.use(
    (config) => {
      const authToken = Cookies.get('accessToken');

      if (authToken) {
        config.headers['Authorization'] = `JWT ${authToken}`
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.message) {
        toast.error(error.message);
      } else {
        switch (error.response?.status) {
          case 500:
            toast.error('Internal Server Error');
            break;
          case 403:
            toast.error(error?.response?.data.detail);
            break;
          case 404:
            //will add later
            break;
          case 400:
            //will add later
            break;
          case 409:
            //will add later
            break;
          case 401:
            // deleting cookies if user is not authorized
            localStorage.clear();
            deleteAllCookies();
            toast.error(error?.response?.data.detail);
            // router.push('/sign-in');
            break;
          default:
            break;
        }
      }

      return Promise.reject(error);
    }
  );
  
  return instance

};

export default useInterceptor;