import React from 'react'
import { useEffect } from 'react';
import { Formik } from 'formik';
import css from "./Modal.module.css"
import { auth } from '../../firebase-config';
import { Notify } from 'notiflix';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
  } from 'firebase/auth';

export const ModalLogin  = ({ children, closeModal }) => {

    useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [closeModal]);


  return (
    <div className={css.modal_backdrop} onClick={closeModal}>
<div className={css.modal_window}>
    <svg className={css.register_icon} onClick={closeModal} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 8L8 24" stroke="#191A15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8L24 24" stroke="#191A15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <h2 className={css.register_h}>Log In</h2>
    <p className={css.register_p}>Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.</p>
<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, actions) => {
        const { email, password } = values;

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            Notify.success('You have successfully logged in');
          })
          .catch(error => {
            Notify.failure(`${error.code} - ${error.message}`);
          });
        
      
          actions.resetForm();
          closeModal();
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <>
         <form className={css.register_form} onSubmit={handleSubmit}>
            

       
             
           <input 
           className={css.register_input}
           placeholder='Email'
           type="email"
           name="email"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input 
           className={css.register_input}
           placeholder='Password'
           type="password"
           name="password"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button className={css.register_btn} type="submit" disabled={isSubmitting}>
           Log In
           </button>
         </form>
           </>
       )}
     </Formik>
    </div>
    </div>
  );
}