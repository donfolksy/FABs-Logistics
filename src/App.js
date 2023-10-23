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
import Signup from "./components/Auth/Signup";
import Checkout from "./components/PaymentCheckout";
import PaymentSuccessful from "./components/PaymentSuccessful";
import BookNow from "./components/BookNow";
import BankSummary from "./components/BankSummary";
import Paypal from "./components/Paypal";
import Books from "./components/Books";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
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
          <Route path="/payment" element={<ProtectedRoute ><Payment /></ProtectedRoute>} />
          {/* <Route path="/transportation" element={<ProtectedRoute ><Transportation /></ProtectedRoute>} /> */}
          <Route
  path="/transportation"
  element={<ProtectedRoute to="/sign-in"><Transportation /></ProtectedRoute>}
/>

          <Route path="/home-delivery" element={<ProtectedRoute><HomeDelivery /></ProtectedRoute>} />
          <Route path="/pick-up" element={<ProtectedRoute><PickUpGoods /></ProtectedRoute>} />
          <Route path="/book-now" element={<ProtectedRoute><BookNow /></ProtectedRoute>} />

          <Route path="/details" element={<ProtectedRoute to="admin-login"><Details /></ProtectedRoute>} />

          <Route path="/payment-checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
          <Route path="/bank-summary" element={<ProtectedRoute><BankSummary /></ProtectedRoute>} />
          <Route path="/paypal" element={<ProtectedRoute><Paypal/></ProtectedRoute>} />
          
          <Route exact path="/books" component={Books} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
