import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';
import './commonjs/common.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading components
const Home = React.lazy(() => import('./pages/Home'));
const Aboutus = React.lazy(() => import('./pages/Aboutus'));
const Blackbars = React.lazy(() => import('./pages/Blackbars'));
const Brightbars = React.lazy(() => import('./pages/Brightbars'));
const Steelgrades = React.lazy(() => import('./pages/Steelgrades'));
const Infrastructure = React.lazy(() => import('./pages/Infrastructure'));
const Applications = React.lazy(() => import('./pages/Applications'));
const Contactus = React.lazy(() => import('./pages/Contactus'));
const Error = React.lazy(() => import('./pages/Error'));
const Thankyou = React.lazy(() => import('./pages/Thankyou'));
const HexBar = React.lazy(() => import('./pages/HexBar'));
const Category = React.lazy(() => import('./pages/Category.jsx'));

// Scroll to top handler
const ScrollToTopHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null; // No UI needed
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopHandler /> 
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blackbars" element={<Blackbars />} />
          <Route path="/brightbars" element={<Brightbars />} />
          <Route path="/steelgrades" element={<Steelgrades />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/thankyoupage" element={<Thankyou />} />
          <Route path="/hexbar" element={<HexBar />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </React.Suspense>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
