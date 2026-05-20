import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Subject from './components/Subject/Subject';
import About from './components/About/About';
import Learning from './components/Learning/Learning';
import Review from './components/Review/Review';
import Advantages from './components/Advantages/Advantages';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Price from './components/Price/Price';
import { HelmetProvider } from 'react-helmet-async';

const Robototechnika = lazy(() => import('./components/Robototechnika/Robototechnika'));
const Programming = lazy(() => import('./components/Programming/Programming'));
const Modeling3D = lazy(() => import('./components/3d_modeling/3d_modelling'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy/PrivacyPolicy'));
const Agreement = lazy(() => import('./components/Agreement/Agreement'));

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <Header />
        <Hero />
      </div>
      <Subject />
      <About />
      <Learning />
      <Review />
      <Price />
      <Advantages />
      <Contacts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/robototechnika" element={<Robototechnika />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/3d-modeling" element={<Modeling3D />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
