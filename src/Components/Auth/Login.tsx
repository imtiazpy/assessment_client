'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Input from '../Fields/Input/Input';


interface ILogin extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  logo?: boolean;
}

const Login: React.FC<ILogin> = ({className, logo}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }


  return (
    <div className={`flex flex-col gap-8 p-8 bg-gray-800 items-center ${className}`}>
      {logo && (
        <h2 className="text-2xl text-teal-700 font-bold uppercase">Talent<span className='text-gray-700'>hive</span></h2>
      )}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input 
          type='email'
          name='email'
          handleChange={handleChange}
        />
        <Input 
          type='password'
          name='password'
          handleChange={handleChange}
        />
        <Link className='text-xs text-[#ffffff40] hover:underline hover:text-teal-700 transition-all ease-in delay-75 w-max inline-block' href={'/'}>Forgot password</Link>
        <button className='btn-alt btn-primary' type="submit">Login</button>
      </form>
      <p className='text-[#ffffff40]'>
        Don't have an account?{' '}
        <Link href='/signup' className='hover:underline hover:text-teal-700 transition-all ease-in delay-75'>Signup</Link>
      </p>
    </div>
  );
};

export default Login;