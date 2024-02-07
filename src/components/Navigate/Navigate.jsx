import { NavLink } from 'react-router-dom';
import css from "../App/Header.module.css"
import { RegisterForm } from 'components/Register/Register';
import LoginForm from 'components/Login/Login';
import { useContext} from 'react';
import {  Auth } from '../../context';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config';

export const Navigate= () => {

    const authContex = useContext(Auth);
    const isLoggedIn = authContex.isLoggedIn;

    const handleClickLogOut = ({logOut}) => {
        // setIsNavigationOpen(false);
    
        signOut(auth)
          .then(() => {
            logOut();
          })
          .catch(error => {
            console.log(error);
          });
      };

    return(
        <div className={css.appContainer}  >
        <header className={css.header} >
            <a href='/#' className={css.logo}><span className={css.logo_span}>psychologists.</span>services</a>
          <div className={css.container}>
      
          <nav className={css.navigation} >
            <NavLink className={css.nav_link}  to="/">
              Home
            </NavLink>
            <NavLink className={css.nav_link} to="/psychologists">
            Psychologists
            </NavLink>
            {isLoggedIn && (
            <NavLink className={css.nav_link}  to="/favorites">
              Favourites
            </NavLink>)}
          </nav>
          </div>
          <div className={css.form}>
          {isLoggedIn ? (
            <button className={css.logout} onClick={handleClickLogOut}>Log out</button>):(
                <>
          <LoginForm />
          <RegisterForm/>
                </>)}
          </div>
        </header>
       </div>
    )
}
