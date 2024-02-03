



import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import { RegisterForm } from "./Register";
const HomePage = lazy(() => import('pages/Home'))
const PsychologistsPage = lazy(() => import('pages/Psychologists'));
const FavoritePage = lazy(() => import('pages/Favorites'));





export const App = () => {


 return (
  <div >
  <header >
    <nav >
      <NavLink  to="/">
        Home
      </NavLink>
      <NavLink to="/psychologists">
      Psychologists
      </NavLink>
      <NavLink  to="/favorites">
        Favourites
      </NavLink>
    </nav>
  </header>
  <main>
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Suspense>
  </main>
</div>
  );
};

