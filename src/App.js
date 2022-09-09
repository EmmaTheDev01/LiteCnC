// Import Semua Component disini Seperti gambar, halaman, plugin, dan lain-lain

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Default from './components/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';
import About from './components/pages/About';
import Cars from './components/pages/Cars';
import Brands from './components/pages/Brands';
import Booking from './components/Booking';
import Cottages from './components/pages/Cottages';
import Contact from './components/pages/Contact';
import Tandc from './components/pages/Tandc';
import TopNav from './components/TopNav';
import CarRental from './components/CarRental';
import RentorSellCottage from './components/pages/RentorSellCottage';
import AllCottages from './components/pages/AllCottages';
import RentOrSellCars from './components/pages/RentOrSellCars';
import Policies from './components/Footer/Policies';
import Faq from './components/Footer/FAQ';
import Partners from './components/Footer/Partners';
import Services from './components/Footer/Services';
import IncidentResponse from './components/Footer/IncidentResponse';
import Restrictions from './components/Footer/Restrictions';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import Support from './components/Footer/Support';
import LiteCnC from './components/Footer/LiteCnC';
import Host from './components/Footer/Host';
import Topics from './components/Footer/Topics';
import Terms from './components/Footer/Terms';
import Report from './components/Footer/Report';
import Careers from './components/Footer/Careers';
import Agent from './components/Footer/Agent';
import Conditions from './components/Footer/Conditions';
import Countries from './components/Footer/Countries';
function App() {
  return (
    <React.Fragment>
      {
        
      }
      <TopNav />
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/booking" component={Booking} />
        <Route path="/brands" component={Brands} />
        <Route path="/cars" component={Cars} />
        <Route path="/about" component={About} />
        <Route path="/cottages" component={Cottages} />
        <Route path="/tandc" component={Tandc} />
        <Route path="/CarRental" component={CarRental} />
        <Route path="/rentcottage" component={RentorSellCottage} />
        <Route path="/allcottages" component={AllCottages} />
        <Route path="/rentorsellcars" component={RentOrSellCars} />
        <Route path="/host" component={Host} />
        <Route path="/partners" component={Partners} />
        <Route path="/Litecnc" component={LiteCnC} />
        <Route path="/policies" component={Policies} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/support" component={Support} />
        <Route path="/faq" component={Faq} />
        <Route path="/restrictions" component={Restrictions} />
        <Route path="/services" component={Services} />
        <Route path="/topics" component={Topics} />
        <Route path="/report" component={Report} />
        <Route path="/terms" component={Terms} />
        <Route path="/countries" component={Countries} />
        <Route path="/conditions" component={Conditions} />
        <Route path="/agent" component={Agent} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/incidentresponse" component={IncidentResponse} />
        <Route component={Default} />
       
      </Switch>
      <Modal/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
