import React from 'react'
// import { useDispatch} from 'react-redux';


// import css from './register.module.css'

export const RegisterForm = () => {

//   const dispatch = useDispatch();


//  const handleSubmit = e => {
//    e.preventDefault();
//    const form = e.currentTarget;
//    dispatch(
//      {
//        name: form.elements.name.value,
//        email: form.elements.email.value,
//        password: form.elements.password.value,
//      })
//    ;
//    form.reset()
//   };
  


  return (
    <div>
      
      <form >
        <label name="name" >
          <p>Name:</p>
          <input type="text" name="name" required  />
        </label>
        <label class="form__label">
          <p>Email:</p>
          <input type="email" name="email" required  />
        </label>
        <label >
          <p>Password:</p>
          <input
            type="password"
            name="password"
            required
            
          />
        </label>
        <button type="submit" >Sign Up</button>
      </form>
    </div>
  );
}