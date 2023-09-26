import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar/Navbar";
import Transportation from "./components/Transportation";
import HomeDelivery from "./components/pick-up/home-delivery/Index";
import PickUpGoods from "./components/pick-up/pick-up-goods/Index";
import Details from "./components/Details";
import Signup from "./components/Signup";
import Checkout from "./components/PaymentCheckout";
import PaymentSuccessful from "./components/PaymentSuccessful"
import BookNow from "./components/BookNow";
import BankSummary from "./components/BankSummary";
import Paypal from "./components/Paypal";
import Books from "./components/Books";
// import Navbar  from './components/Navbar';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/home-delivery" element={<HomeDelivery />} />
          <Route path="/pick-up" element={<PickUpGoods />} />
          <Route path="/book-now" element={<BookNow />} />

          <Route path="/details" element={<Details />} />

          <Route path="/payment-checkout" element={<Checkout />} />

          <Route path="/payment-successful" element={<PaymentSuccessful/>} />  

          <Route path="/bank-summary" element={<BankSummary/>} /> 
          <Route path="/paypal" element={<Paypal/>} /> 
          <Route exact path="/books" component={Books} />

        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
