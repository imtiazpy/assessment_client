export interface IValidationError {
  response?: {
    data: string
  }
};

export interface ILoginResponse {
  access: string;
  refresh: string;
}

export type AuthAction =
  | { type: 'LOGOUT' }
  | { type: 'ERROR', payload: object }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'USER_TYPE_EMPLOYER' }
  | { type: 'USER_TYPE_JOB_SEEKER' }
  | { type: 'CHECK_AUTH_STATUS', payload: boolean }
  | { type: 'SIGNUP_SUCCESS' };

export type State = {
  isAuthenticated: boolean,
  validationError: '',
  isJobSeeker: false,
  isEmployer: false
}

export interface IAuthContext {
  state: State;
  dispatch: React.Dispatch<AuthAction>;
  logout: () => void;
  handleSignUpSuccess: () => void;
  loginSuccessCB: (response: ILoginResponse) => void;
  validationErrorCB: (error: IValidationError) => void;
};