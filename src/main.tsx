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
//Tables
const BasicTables = lazy(() => import('./Components/Tables/BasicTables/BasicTables'));
const DataTables = lazy(() => import('./Components/Tables/DataTables/DataTables'));
const EditTables = lazy(() => import('./Components/Tables/EditTables/EditTables'));
//Landing Page
const LandingPage = lazy(() => import('./Components/LandingPage/LandingPage'));
//Maps
const Leaflet = lazy(() => import('./Components/Maps/Leaflet/Leaflet'));
const Simplemaps = lazy(() => import('./Components/Maps/SimpleMaps/Simplemaps'));
//Pages
const Profile = lazy(() => import('./Components/Pages/Profile/Profile'));
const EditProfile = lazy(() => import('./Components/Pages/EditProfile/EditProfile'));
const AboutUs = lazy(() => import('./Components/Pages/AboutUs/AboutUs'));
const Settings = lazy(() => import('./Components/Pages/Settings/Settings'));
const Invoice = lazy(() => import('./Components/Pages/Invoice/Invoice'));
const Pricing = lazy(() => import('./Components/Pages/Pricing/Pricing'));
const Gallery = lazy(() => import('./Components/Pages/Gallery/Gallery'));
const Todotask = lazy(() => import('./Components/Pages/Todotask/Todotask'));
const Faqs = lazy(() => import('./Components/Pages/Faqs/Faqs'));
const EmptyPage = lazy(() => import('./Components/Pages/EmptyPage/EmptyPage'));
const Switcher = lazy(() => import('./Components/Pages/Switcher/Switcher'));
const Mail = lazy(() => import('./Components/Pages/Mail/Mail/Mail'));
const MailCompose = lazy(() => import('./Components/Pages/Mail/MailCompose/MailCompose'));
const ReadMail = lazy(() => import('./Components/Pages/Mail/ReadMail/ReadMail'));
const MailSetting = lazy(() => import('./Components/Pages/Mail/MailSetting/MailSetting'));
const Chat = lazy(() => import('./Components/Pages/Mail/Chat/Chat'));
const Shop = lazy(() => import('./Components/Pages/Ecommerce/Shop/Shop'));
const ProductDetails = lazy(() => import('./Components/Pages/Ecommerce/ProductDetails/ProductDetails'));
const Cart = lazy(() => import('./Components/Pages/Ecommerce/Cart/Cart'));
const CheckOut = lazy(() => import('./Components/Pages/Ecommerce/CheckOut/CheckOut'));
const WishList = lazy(() => import('./Components/Pages/Ecommerce/WishList/WishList'));
const SignIn = lazy(() => import('./Components/Pages/CustomPages/SignIn/SignIn'));
const SignUp = lazy(() => import('./Components/Pages/CustomPages/SignUp/SignUp'));
const ForgotPassword = lazy(() => import('./Components/Pages/CustomPages/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('./Components/Pages/CustomPages/ResetPassword/ResetPassword'));
const LockScreen = lazy(() => import('./Components/Pages/CustomPages/LockScreen/LockScreen'));
const UnderConstruction = lazy(() => import('./Components/Pages/CustomPages/UnderConstruction/UnderConstruction'));
const Error404 = lazy(() => import('./Components/Pages/CustomPages/Error404/Error404'));
const Error500 = lazy(() => import('./Components/Pages/CustomPages/Error500/Error500'));
const Error501 = lazy(() => import('./Components/Pages/CustomPages/Error501/Error501'));

//Utilities
const Background = lazy(() => import('./Components/utlities/Background/Background'));
const Border = lazy(() => import('./Components/utlities/Border/Border'));
const Display = lazy(() => import('./Components/utlities/Display/Display'));
const Flex = lazy(() => import('./Components/utlities/Flex/Flex'));
const Height = lazy(() => import('./Components/utlities/Height/Height'));
const Margin = lazy(() => import('./Components/utlities/Margin/Margin'));
const Padding = lazy(() => import('./Components/utlities/Padding/Padding'));
const Position = lazy(() => import('./Components/utlities/Position/Position'));
const Width = lazy(() => import('./Components/utlities/Width/Width'));
const Extras = lazy(() => import('./Components/utlities/Extras/Extras'));

// Users
const Usuarios = lazy(() => import('./Components/Usuarios'));

// Products
const Products = lazy(() => import('./Components/Products'));

const CustomAuthenticationPages = lazy(() => import('./CustomAuthenticationPages')); //custom error, authentication pages

const Landing = lazy(() => import('./Landing')); //landing custom page

const FirebaseAuth = lazy(() => import('./FirebaseAuthentication/FirebaseAuth'));

const FirebaseSignIn = lazy(() => import('./FirebaseAuthentication/FirebaseSignIn'));

const FirebaseSignUp = lazy(() => import('./FirebaseAuthentication/FirebaseSignUp'));



const container:any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Fragment>

    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>

          {/* Firebase Authentication Routes */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<FirebaseAuth />}>
            <Route index element={<FirebaseSignIn />} />
            <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignIn`} element={<FirebaseSignIn />} />
            <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignUp`} element={<FirebaseSignUp />} />
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
            </Route>
          </Route>

          {/* Custom Authentication Pages */}
          <Route path="/" element={<CustomAuthenticationPages />}>
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/signin`} element={<SignIn />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/signup`} element={<SignUp />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/forgotpassword`} element={<ForgotPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/resetpassword`} element={<ResetPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/lockscreen`} element={<LockScreen />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/underconstruction`} element={<UnderConstruction />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/error404`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/error500`} element={<Error500 />} />
            <Route path={`${import.meta.env.BASE_URL}*`} element={<Error500 />} />
          </Route>
        </Routes>

      </React.Suspense>
    </BrowserRouter>
  </Fragment>
)
