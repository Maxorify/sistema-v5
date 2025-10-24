import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));


const ChartJs = lazy(() => import('./charts/ChartJs'));
const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));
const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const BlankPage = lazy(() => import('./user-pages/BlankPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/basic-ui/buttons" element={<Buttons />} />
        <Route path="/basic-ui/dropdowns" element={<Dropdowns />} />
        <Route path="/basic-ui/typography" element={<Typography />} />

        <Route path="/form-Elements/basic-elements" element={<BasicElements />} />

        <Route path="/tables/basic-table" element={<BasicTable />} />

        <Route path="/icons/font-awesome" element={<FontAwesome />} />

        <Route path="/charts/chart-js" element={<ChartJs />} />
        <Route path="/user-pages/login-1" element={<Login />} />
        <Route path="/user-pages/register-1" element={<Register1 />} />

        <Route path="/user-pages/error-404" element={<Error404 />} />
        <Route path="/user-pages/error-500" element={<Error500 />} />

        <Route path="/user-pages/blank-page" element={<BlankPage />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
