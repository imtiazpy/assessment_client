import Login from '@/Components/Auth/Login';
import LoginSignup from '@/Components/Auth/LoginSignup';
import Modal from '@/Components/Modals/Modal';
import React from 'react';

const LoginModal = () => {
  return (
    <div>
      <Modal>
        <Login className='rounded-lg' logo />
      </Modal>
    </div>
  );
};

export default LoginModal;