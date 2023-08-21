import React, { Fragment, lazy } from 'react'
import { createRoot } from 'react-dom/client';
import './Init';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Loader from './Components/Layouts/Loader/Loader';
import CustomSwitcher from './CustomSwitcher';




const Indexpage = lazy(() => import('./Components/indexpage/Indexpage'));

//Forms
const FormElements = lazy(() => import('./Components/Forms/FormElements/FormElements'));
const AdvancedForm = lazy(() => import('./Components/Forms/AdvancedForm/AdvancedForm'));
const FormLayouts = lazy(() => import('./Components/Forms/FormLayouts/FormLayouts'));
const FormValidation = lazy(() => import('./Components/Forms/FormValidation/FormValidation'));
const Formwizards = lazy(() => import('./Components/Forms/Formwizards/Formwizards'));
const FormEditor = lazy(() => import('./Components/Forms/FormEditor/FormEditor'));
const FormSize = lazy(() => import('./Components/Forms/FormSize/FormSize'));

// Auth module
const SignIn = lazy(() => import('./modules/auth/SignIn'));

// Users
const Usuarios = lazy(() => import('./Components/Usuarios'));

// Products
const Products = lazy(() => import('./Components/Products'));
const ProductDetail = lazy(() => import('./modules/products/ProductDetail/ProductDetail'));

const CustomAuthenticationPages = lazy(() => import('./CustomAuthenticationPages')); //custom error, authentication pages

const Landing = lazy(() => import('./Landing')); //landing custom page

const FirebaseAuth = lazy(() => import('./FirebaseAuthentication/FirebaseAuth'));

const container:any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Fragment>

    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>

          {/* Firebase Authentication Routes */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<FirebaseAuth />}>
            <Route index element={<SignIn />} />
          </Route>

          {/* Components Routes */}

          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index element={<Indexpage />} />

            {/* Main */}

            <Route path={`${import.meta.env.BASE_URL}indexpage`} element={<Indexpage />} />

            {/* Forms */}
            <Route>
              <Route path={`${import.meta.env.BASE_URL}forms/formelements`} element={<FormElements />} />
              <Route path={`${import.meta.env.BASE_URL}forms/advancedform`} element={<AdvancedForm />} />
              <Route path={`${import.meta.env.BASE_URL}forms/formlayouts`} element={<FormLayouts />} />
              <Route path={`${import.meta.env.BASE_URL}forms/formvalidation`} element={<FormValidation />} />
              <Route path={`${import.meta.env.BASE_URL}forms/formwizards`} element={<Formwizards />} />
              <Route path={`${import.meta.env.BASE_URL}forms/wysiwygeditor`} element={<FormEditor />} />
              <Route path={`${import.meta.env.BASE_URL}forms/formsize`} element={<FormSize />} />
            </Route>
            {/* Users */}
            <Route>
              <Route path={`${import.meta.env.BASE_URL}users`} element={<Usuarios />} />
              <Route path={`${import.meta.env.BASE_URL}users/add`} element={<Usuarios />} />
            </Route>

            {/* Sucursales */}
            <Route>
              <Route path={`${import.meta.env.BASE_URL}sucursales`} element={<Usuarios />} />
              <Route path={`${import.meta.env.BASE_URL}sucursales/add`} element={<Usuarios />} />
            </Route>

            {/* Productos */}
            <Route>
              <Route path={`${import.meta.env.BASE_URL}products`} element={<Products />} />
              <Route path={`${import.meta.env.BASE_URL}products/add`} element={<Usuarios />} />
              <Route path={`${import.meta.env.BASE_URL}products/:id/detail`} element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>

      </React.Suspense>
    </BrowserRouter>
  </Fragment>
)
