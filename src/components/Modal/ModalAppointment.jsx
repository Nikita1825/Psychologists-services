import React from 'react'
import { useEffect,useState } from 'react';
import { Formik } from 'formik';
import css from "./Modal.module.css"

import { Notify } from 'notiflix';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';


export const ModalAppointment  = ({  closeModal }) => {

    useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [closeModal]);


      const [value, onChange] = useState('10:00');

  return (
    <div className={css.modal_backdrop} onClick={closeModal}>
<div className={css.modal_window}>
    <svg className={css.register_icon} onClick={closeModal} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 8L8 24" stroke="#191A15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8L24 24" stroke="#191A15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <h2 className={css.register_h}>Make an appointment with a psychologists</h2>
    <p className={css.register_p}>You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.</p>
<Formik

       initialValues={{ email: '', name:'', number:'', }}
       validate={values => {
         const errors = {};
         if (!values.email && !values.name && !values.number ) {
           errors.email = 'Required';
           errors.name = 'Required';
           errors.number = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors; 
       }}
       
       
       onSubmit={(values, actions) => {
        // const { email, password, name } = values;
        Notify.success(
            'Great, you have made an appointment.'
          );
 
      
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
         
       }) => (
        <>
         <form className={css.register_form} onSubmit={handleSubmit}>
         {errors.name && touched.name && errors.name}
         <input 
           className={css.register_input}
           placeholder='Name'
           type="text"
           name="name"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.name}
           />
           
           {errors.number && touched.number && errors.number}
           <div className={css.picker}>

           <input 
           className={css.register_input}
           placeholder='+380'
           type="number"
           name="number"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.number}
           />
          <TimePicker onChange={onChange} value={value} />
           </div>
           
           {errors.email && touched.email && errors.email}
           <input 
           className={css.register_input}
           placeholder='Email'
           type="email"
           name="email"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}
           />
           
            <input 
           className={css.register_input}
           placeholder='Comment'
           type="text"
           name="comment"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.comment}
           />

           {errors.password && touched.password && errors.password}
           <button className={css.register_btn} type="submit" disabled={isSubmitting}>
           Send
           </button>
         </form>
           </>
       )}
     </Formik>
       
    
    </div>
    </div>
  );
}