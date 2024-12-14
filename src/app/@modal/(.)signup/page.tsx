import Signup from '@/Components/Auth/Signup';
import Modal from '@/Components/Modals/Modal';
import React from 'react';

const SignUpModal = () => {
  return (
    <Modal>
      <Signup className='rounded-lg' logo />
    </Modal>
  );
};

export default SignUpModal;