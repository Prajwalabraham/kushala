import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Website/home';
import AppPage from './Website/appPage'
import Crypto from './Website/crypto'
import Features from './Website/features'
import Help from './Website/help'
import StockList from './Website/stocklist'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp'
import Disclosures from "./SignUp/Disclosures"
import Terms from "./SignUp/Terms"
import StockSearch from "./Website/StockSearch"
import AccountStatus from "./SignUp/AccountStatus"
import DashboardHome from "./Dashboard/DashboardHome"
import QuickInvest from "./Dashboard/QuickInvest"
import HelpAndSupport from "./Dashboard/HelpSupport"
import Chats from "./Dashboard/Chats"
import Stocks from "./Dashboard/Stocks"
import Cryptos from "./Dashboard/Cryptos"
import Portfolio from "./Dashboard/Portfolio"
import BankAndAccount from "./Dashboard/BankAndAccount"
import Search from "./Dashboard/Search"
import InvestingOptions from "./Dashboard/InvestingOptions"
import UserProfileDetails from "./Dashboard/UserProfileDetails"
import UserSettings from "./Dashboard/UserSettings"
import CreateUserLogin from "./SignUp/CreateUserLogin"


function App() {
  return (
   
    <BrowserRouter>
      <Routes>

        {/* Website Pages */}
        <Route path="/" element={<Home />}/>
        <Route path='/AppPage' element={<AppPage />}/>
        <Route path='/Crypto' element={<Crypto />}/>
        <Route path='/Features' element={<Features />}/>
        <Route path='/Help' element={<Help />}/>
        <Route path='/StockList' element={<StockList />}/>
        <Route path='/StockSearch' element={<StockSearch />}/>

        {/* Login and Signup */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Disclosures' element={<Disclosures/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/AccountStatus' element={<AccountStatus/>}/>
        <Route path='/CreateUserLogin' element={<CreateUserLogin/>}/>


        {/* Dashboard */}
        <Route path='/DashboardHome' element={<DashboardHome/>}/>
        <Route path='/QuickInvest' element={<QuickInvest/>}/>
        <Route path='/HelpAndSupport' element={<HelpAndSupport/>}/>
        <Route path='/Chats' element={<Chats/>}/>
        <Route path='/Stocks' element={<Stocks/>}/>
        <Route path='/InvestingOptions' element={<InvestingOptions/>}/>
        <Route path='/Cryptos' element={<Cryptos/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/BankAndAccount' element={<BankAndAccount/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/UserProfileDetails' element={<UserProfileDetails />}/>
        <Route path='/UserSettings' element={<UserSettings />}/>




          
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
