import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense,useState, useEffect} from 'react';
import css from "./Header.module.css"

import {  FilterContex, Auth } from '../../context';
import { auth } from 'firebase-config';

import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'components/Navigate/Navigate';

const HomePage = lazy(() => import('pages/Home'))
const PsychologistsPage = lazy(() => import('pages/Psychologists'));
const FavoritePage = lazy(() => import('pages/Favorites'));





export const App = () => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [filter, setFilter] = useState(null);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };
  const logOut = () => {
    setCurrentUser({
      name: '',
      email: '',
    });
    setIsLoggedIn(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        setCurrentUser(newUser);
        setIsLoggedIn(true);
      } else {
        setCurrentUser({
          name: '',
          email: '',
        });
        setIsLoggedIn(false);
      }
    });
  }, []);

 return (
  <Auth.Provider value={{currentUser, isLoggedIn} }>
  <FilterContex.Provider value={filter}>

  <div className={css.appContainer}  >
 
  <Navigate logOut={logOut}/>
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
  </Auth.Provider>
  );
};

