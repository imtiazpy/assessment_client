import { useContext } from "react"

import AuthContext from "@/context/authContext/authContext"



const useAuth = () => {
  const { state, dispatch, logout, loginSuccessCB, validationErrorCB, handleSignUpSuccess } = useContext(AuthContext);

  return {
    state,
    dispatch,
    logout,
    validationErrorCB,
    loginSuccessCB,
    handleSignUpSuccess
  }
}

export default useAuth;