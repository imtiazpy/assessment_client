'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Input from '../Fields/Input/Input';


interface ISignup extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  logo?: boolean;
}

const Signup: React.FC<ISignup> = ({className, logo}) => {

  const [formData, setFormData] = useState({})

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className={`bg-gray-800 p-8 flex flex-col gap-8 items-center ${className}`}>
      {logo && (
        <h2 className="text-2xl text-teal-700 font-bold uppercase">Talent<span className='text-gray-700'>hive</span></h2>
      )}
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
        <Input 
          name='name'
          type='text'
          handleChange={handleChange}
        />
        <Input 
          name='email'
          type='email'
          handleChange={handleChange}
        />
        <Input 
          name='password'
          type='password'
          handleChange={handleChange}
        />
        <Input 
          name='re_password'
          type='password'
          placeholder='confirm password'
          handleChange={handleChange}
        />
        <Input 
          name='type'
          type='text'
          handleChange={handleChange}
        />
        <button type="submit" className='btn-alt btn-primary'>Signup</button>
      </form>
      <p className='text-[#ffffff40]'>
        Already have an account?{' '}
        <Link href='/login' className='hover:underline hover:text-teal-700 transition-all ease-in delay-75'>Login</Link>
      </p>
    </div>
  );
};

export default Signup;