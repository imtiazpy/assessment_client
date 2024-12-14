'use client'

import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true)

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='p-10 bg-white'>
      <div className='flex flex-col gap-4'>

        {isLogin ? (
          <>
            <h2>Welcome Back</h2>
            <p>Signin to continue</p>
          </>
        ) : (
          <>
            <h2>Welcome To TalentHive</h2>
            <p>Signup to continue</p>
          </>
        )}
      </div>

      {/* <div>
        {
          isLogin ? (
            <Login togglePage={togglePage} />
          ) : (
            <Signup togglePage={togglePage} />
          )
        }
      </div> */}
    </div>
  );
};

export default LoginSignup;