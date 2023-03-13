import React from 'react';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrent } from 'redux/auth/authOperations';
import Header from '../Header';
import Footer from 'components/Footer';
import RegisterPage from 'components/pages/RegisterPage';
import LoginPage from 'components/pages/LoginPage';
import HomePage from 'components/pages/HomePage';
import ContactsPage from 'components/pages/ContactsPage';
import ContactDetails from 'components/ContactDetails';

import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

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
            <Route
              path="/"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<HomePage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            >
              <Route path=":id" element={<ContactDetails />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
