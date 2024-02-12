import React from 'react'
import css from './Register.module.css'
import { ModalRegister } from 'components/Modal/ModalRegister';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

  const [childrenModal, setChildrenModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

 
  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };
  const handleClick = event => {
  
    navigate('/')
    const value = event.target.innerHTML;
    console.log(value)
    if (value === 'Registration') {
      setChildrenModal('registration');
    } else {
      setChildrenModal('login');
    }

    setIsModalOpen(true);

    document.body.classList.add('hidden');
  };


  return (
    <div>
<button onClick={handleClick} className={css.register}>Registration</button>
{isModalOpen && childrenModal === 'registration' && (
        <ModalRegister closeModal={closeModal} >

        </ModalRegister>
      )}
    </div>
  );
}