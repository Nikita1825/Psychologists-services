import React from 'react'
import css from './Login.module.css'
import { useState } from 'react';
import {ModalLogin} from '../Modal/ModalLogin'


export const LoginForm = () => {
  const [childrenModal, setChildrenModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


 
  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };
  const handleClick = event => {
  

    const value = event.target.innerHTML;
    console.log(value)

    if (value === 'Log In') {
      setChildrenModal('login');
    } else {
      setChildrenModal('registration');
    }

    setIsModalOpen(true);

    document.body.classList.add('hidden');
  };
  


  return (
    <div>
<button  onClick={handleClick} className={css.login}>Log In</button>
{isModalOpen && childrenModal === 'login' && (
        <ModalLogin closeModal={closeModal} >

        </ModalLogin>
      )}
    </div>
  );
}
export default LoginForm