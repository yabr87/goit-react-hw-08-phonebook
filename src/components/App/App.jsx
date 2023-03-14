import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrent } from 'redux/auth/authOperations';

import Footer from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import ContactDetails from 'components/ContactDetails';

// import ContactsPage from 'components/pages/ContactsPage';
const Header = lazy(() => import('../Header'));
const RegisterPage = lazy(() => import('components/pages/RegisterPage'));
const LoginPage = lazy(() => import('components/pages/LoginPage'));
const HomePage = lazy(() => import('components/pages/HomePage'));
const ContactsPage = lazy(() => import('components/pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <main>
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
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
