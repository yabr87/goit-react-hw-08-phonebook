import React from 'react';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrent } from 'redux/auth/authOperations';

import ContactList from '../ContactList';
import Header from '../Header';
import Footer from 'components/Footer';
import RegisterPage from 'components/RegisterPage';
import LoginPage from 'components/LoginPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<div>Homepage</div>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactList />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
