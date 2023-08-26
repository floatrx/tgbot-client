import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from './components/lazy.ts'; // custom lazy wrapper

const HomePage = lazy(() => import('./components/HomePage.tsx'));
const AboutPage = lazy(() => import('./components/AboutPage.tsx'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage.tsx'));

function App() {
  return (
    <>
      <div><img src="/vite.svg" alt=""/></div>
      <NavLink to={"/"}>Home</NavLink>{' / '}
      <NavLink to={"/about"}>About</NavLink>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
