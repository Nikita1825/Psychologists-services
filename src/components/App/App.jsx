import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense,useState} from 'react';
import css from "./Header.module.css"
import { RegisterForm } from 'components/Register/Register';
import LoginForm from 'components/Login/Login';
import {  FilterContex } from '../../context';

const HomePage = lazy(() => import('pages/Home'))
const PsychologistsPage = lazy(() => import('pages/Psychologists'));
const FavoritePage = lazy(() => import('pages/Favorites'));





export const App = () => {
  const [filter, setFilter] = useState(null);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

 return (
  <FilterContex.Provider value={filter}>

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
      <NavLink className={css.nav_link}  to="/favorites">
        Favourites
      </NavLink>
    </nav>
    </div>
    <div className={css.form}>
      
    <LoginForm />
    <RegisterForm/>
    </div>
  </header>
  <main>
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage changeFilter={changeFilter} />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Suspense>
  </main>
</div>
  </FilterContex.Provider>
  );
};

