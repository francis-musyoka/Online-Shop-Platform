import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/customer/Home';
import Categories from './components/customer/Categories';
import SignIn from './components/customer/SignIn';
import Cart from './components/customer/Cart';
import Navbar from './components/customer/Navbar';
import NavbarOne from './components/customer/NavbarOne';
import Account from './components/Account/Account';
import Profile from './components/Account/Profile';
import Orders from './components/Account/Orders';
import Favourite from './components/Account/Favourite';
import SignUp from './components/customer/SignUp';
import Footer from './components/customer/Footer';
import CreateAccount from './components/seller/CreateAccount';
import ShowNavbar from './components/customer/ShowNavbar';
import { PATH_URL } from './constant';
import ForgotPassword from './components/customer/ForgotPassword';
import Login from './components/seller/Login';
import SellDashBoard from './components/seller/SellDashBoard';
import ShopProfile from './components/seller/ShopProfile';
import AddProduct from './components/seller/AddProduct';
import MyProducts from './components/seller/MyProducts';
import EditProduct from './components/seller/EditProduct';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <ShowNavbar>
          <NavbarOne/>
          <Navbar/>
        </ShowNavbar>
            
        <Routes>
            <Route path={PATH_URL.HOME} element={<Home />} />
            <Route path={PATH_URL.CATEGORIES} element={<Categories />} />
            <Route path={PATH_URL.SIGN_IN} element={<SignIn />} />
            <Route path={PATH_URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={PATH_URL.CART} element={<Cart />} />
            <Route path={PATH_URL.ACCOUNT.BASE} element={<Account />}>
                <Route path={PATH_URL.ACCOUNT.PROFILE} element={<Profile />} />
                <Route path={PATH_URL.ACCOUNT.ORDERS} element={<Orders />} />
                <Route path={PATH_URL.ACCOUNT.FAVOURITES} element={<Favourite />} />
            </Route>
            <Route path={PATH_URL.SIGN_UP} element={<SignUp />} />
            <Route path={PATH_URL.SELL.DASHBOARD} element={<SellDashBoard />}>
                <Route path={PATH_URL.SELL.PROFILE} element={<ShopProfile/>}/>
                <Route path={PATH_URL.SELL.ADD_PRODUCTS} element={<AddProduct/>}/>
                <Route path={PATH_URL.SELL.MY_PRODUCTS} element={<MyProducts/>}/>
                <Route path={PATH_URL.SELL.EDIT_PRODUCT} element={<EditProduct/>}/>
            </Route>
            <Route path={PATH_URL.SELL.CREATE_BUSINESS_ACCOUNT} element={<CreateAccount />} />
            <Route path={PATH_URL.SELL.LOG_IN} element={<Login/>}/>
            
        </Routes>

            <ShowNavbar>
             <Footer />
            </ShowNavbar>
            
          </BrowserRouter>

    </>
  );
}

export default  App;
