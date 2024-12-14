'use client'

import { createContext, useEffect, useReducer } from "react";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

import { IAuthContext, ILoginResponse, IValidationError } from "./authTypes";
import reducer from "./authReducer";
import { useRouter } from "next/navigation";
import useApiHelper from "@/hooks/useApiHelper";
import CoreConstraint from "@/coreConstraint";
import { deleteAllCookies } from "@/hooks/useInterceptor";



const defaultValue: IAuthContext = {
  state: {
    isAuthenticated: false,
    validationError: '',
    isJobSeeker: false,
    isEmployer: false
  },

  dispatch: () => { },
  logout: () => { },
  handleSignUpSuccess: () => { },
  loginSuccessCB: () => { },
  validationErrorCB: () => { }
}

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const router = useRouter()
  const api = useApiHelper()

  const logout = () => {
    localStorage.clear();
    deleteAllCookies();
    dispatch({ type: 'LOGOUT' });
    router.push('/');
    toast.success("you're logged out");
  };

  const validationErrorCB = (error: IValidationError) => {
    dispatch({ type: 'ERROR', payload: error?.response?.data })
  }

  const loginSuccessCB = async (response: ILoginResponse) => {
    if (!response.access) {
      return;
    };
    Cookies.set('accessToken', response?.access);
    dispatch({ type: 'LOGIN_SUCCESS' });
    // try {
    //   const res = await api.getUserType();
    //   Cookies.set('userType', res.data.type)

    //   switch (res.data.type) {
    //     case CoreConstraint.JOB_SEEKER:
    //       dispatch({ type: 'USER_TYPE_JOB_SEEKER' });
    //       break;
    //     case CoreConstraint.EMPLOYER:
    //       dispatch({ type: 'USER_TYPE_EMPLOYER' });
    //       break;
    //     default:
    //       throw new Error('Invalid user type')
    //   }

    //   toast.success('You are logged in')

    // } catch (error) {
    //   toast.error('User not found')
    // }
  };

  const handleSignUpSuccess = () => {
    toast.success('your registration Done');
    dispatch({ type: 'SIGNUP_SUCCESS' })
    router.push('/activation');
  };

  useEffect(() => {
    dispatch({ type: 'CHECK_AUTH_STATUS', payload: Boolean(Cookies.get('accessToken')) });
  }, []);

  useEffect(() => {
    const userType = Cookies.get('userType');
    if (!userType) {
      return
    }

    switch (userType) {
      case CoreConstraint.EMPLOYER:
        dispatch({ type: 'USER_TYPE_EMPLOYER' });
        break;
      case CoreConstraint.JOB_SEEKER:
        dispatch({ type: 'USER_TYPE_JOB_SEEKER' });
        break;
      default:
        console.warn(`Unexpected user type ${userType}`)
    }
  }, [])


  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        logout,
        validationErrorCB,
        loginSuccessCB,
        handleSignUpSuccess
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;