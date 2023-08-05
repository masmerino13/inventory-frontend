import React, { Fragment, lazy } from 'react'
import { createRoot } from 'react-dom/client';
import './Init';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Loader from './Components/Layouts/Loader/Loader';
import CustomSwitcher from './CustomSwitcher';




const Indexpage = lazy(() => import('./Components/indexpage/Indexpage'));

// Icons

const FontAwesome = lazy(() => import('./Components/Icons/FontAwesome/FontAwesome'));
const MaterialDesign = lazy(() => import('./Components/Icons/MaterialDesign/MaterialDesign'));
const SimpleLine = lazy(() => import('./Components/Icons/SimpleLine/SimpleLine'));
const Feather = lazy(() => import('./Components/Icons/Feather/Feather'));
const Ionic = lazy(() => import('./Components/Icons/Ionic/Ionic'));
const Flag = lazy(() => import('./Components/Icons/Flag/Flag'));
const Pe7 = lazy(() => import('./Components/Icons/Pe7/Pe7'));
const Themify = lazy(() => import('./Components/Icons/Themify/Themify'));
const Typicons = lazy(() => import('./Components/Icons/Typicons/Typicons'));
const Weather = lazy(() => import('./Components/Icons/Weather/Weather'));
const Material = lazy(() => import('./Components/Icons/Material/Material'));
const Bootstrap = lazy(() => import('./Components/Icons/Bootstrap/Bootstrap'));

// Charts

const ChartJs = lazy(() => import('./Components/Charts/ChartJs/ChartJs'));
const Echart = lazy(() => import('./Components/Charts/Echart/Echart'));
const Sparkline = lazy(() => import('./Components/Charts/Sparkline/Sparkline'));
const Area = lazy(() => import('./Components/Charts/ApexChart/Area/Area'));
const Bar = lazy(() => import('./Components/Charts/ApexChart/Bar/Bar'));
const Column = lazy(() => import('./Components/Charts/ApexChart/Column/Column'));
const Line = lazy(() => import('./Components/Charts/ApexChart/Line/Line'));
const Mixed = lazy(() => import('./Components/Charts/ApexChart/Mixed/Mixed'));

// Apps
const Cards = lazy(() => import('./Components/Apps/Cards/Cards'));
const RangeSlider = lazy(() => import('./Components/Apps/RangeSlider/RangeSlider'));
const Calender = lazy(() => import('./Components/Apps/Calender/Calender'));
const Contacts = lazy(() => import('./Components/Apps/Contacts/Contacts'));
const Notification = lazy(() => import('./Components/Apps/Notification/Notification'));
const Widgets = lazy(() => import('./Components/Apps/Widgets/Widgets'));
const WidgetNotification = lazy(() => import('./Components/Apps/WidgetNotification/WidgetNotification'));
const TreeView = lazy(() => import('./Components/Apps/TreeView/TreeView'));
const Filemanager = lazy(() => import('./Components/Apps/FileManager/Filemanager/Filemanager'));
const FilemanagerList = lazy(() => import('./Components/Apps/FileManager/FilemanagerList/FilemanagerList'));
const FilemanagerDetails = lazy(() => import('./Components/Apps/FileManager/FilemanagerDetails/FilemanagerDetails'));
const FileAttachments = lazy(() => import('./Components/Apps/FileManager/FileAttachments/FileAttachments'));

// Elements
const Alerts = lazy(() => import('./Components/Elements/Alerts/Alerts'));
const Avatar = lazy(() => import('./Components/Elements/Avatar/Avatar'));
const Breadcrumbs = lazy(() => import('./Components/Elements/Breadcrumbs/Breadcrumbs'));
const Buttons = lazy(() => import('./Components/Elements/Buttons/Buttons'));
const Badge = lazy(() => import('./Components/Elements/Badge/Badge'));
const Dropdown = lazy(() => import('./Components/Elements/Dropdown/Dropdown'));
const Thumbnails = lazy(() => import('./Components/Elements/Thumbnails/Thumbnails'));
const Listgroup = lazy(() => import('./Components/Elements/Listgroup/Listgroup'));
const Navigation = lazy(() => import('./Components/Elements/Navigation/Navigation'));
const Images = lazy(() => import('./Components/Elements/Images/Images'));
const Pagination = lazy(() => import('./Components/Elements/Pagination/Pagination'));
const Popover = lazy(() => import('./Components/Elements/Popover/Popover'));
const Progress = lazy(() => import('./Components/Elements/Progress/Progress'));
const Spinners = lazy(() => import('./Components/Elements/Spinners/Spinners'));
const MediaObject = lazy(() => import('./Components/Elements/MediaObject/MediaObject'));
const Typography = lazy(() => import('./Components/Elements/Typography/Typography'));
const Tooltip = lazy(() => import('./Components/Elements/Tooltip/Tooltip'));
const Toast = lazy(() => import('./Components/Elements/Toast/Toast'));
const Tags = lazy(() => import('./Components/Elements/Tags/Tags'));
const Tabs = lazy(() => import('./Components/Elements/Tabs/Tabs'));


//Advanced UI
const Accordion = lazy(() => import('./Components/AdvancedUI/accordian/accordian'));
const BootstrapCarousel = lazy(() => import('./Components/AdvancedUI/Carousel/BootstrapCarousel'));
const Collapse = lazy(() => import('./Components/AdvancedUI/Collapse/Collapse'));
const Modals = lazy(() => import('./Components/AdvancedUI/Modals/Modals'));
const Timeline = lazy(() => import('./Components/AdvancedUI/Timeline/Timeline'));
const Sweetalert = lazy(() => import('./Components/AdvancedUI/Sweetalert/Sweetalert'));
const Rating = lazy(() => import('./Components/AdvancedUI/Rating/Rating'));
const Counters = lazy(() => import('./Components/AdvancedUI/Counters/Counters'));
const Search = lazy(() => import('./Components/AdvancedUI/Search/Search'));
const Userlist = lazy(() => import('./Components/AdvancedUI/Userlist/Userlist'));
const Blog = lazy(() => import('./Components/AdvancedUI/BlogPages/Blog/Blog'));
const Blogdetails = lazy(() => import('./Components/AdvancedUI/BlogPages/Blogdetails/Blogdetails'));
const Blogedit = lazy(() => import('./Components/AdvancedUI/BlogPages/Blogedit/Blogedit'));

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
