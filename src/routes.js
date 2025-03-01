import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

const validPaths = ['/', '/projetos', '/contatos', '/404'];

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!validPaths.includes(location.pathname)) {
      navigate('/404', { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Contact />} />
          <Route path="/contatos" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;