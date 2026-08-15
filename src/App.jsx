import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LOSPage from './pages/LOSPage';
import CollectionsPage from './pages/CollectionsPage';
import DataInfrastructurePage from './pages/DataInfrastructurePage';
import CreditMemoPage from './pages/CreditMemoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/los" element={<LOSPage />} />
          <Route path="/services/los" element={<LOSPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/services/collections" element={<CollectionsPage />} />
          <Route path="/data-infrastructure" element={<DataInfrastructurePage />} />
          <Route path="/services/data-infrastructure" element={<DataInfrastructurePage />} />
          <Route path="/credit-memo" element={<CreditMemoPage />} />
          <Route path="/services/credit-memo" element={<CreditMemoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
