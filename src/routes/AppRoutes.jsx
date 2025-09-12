import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Option1 from '../pages/Option1';
import Option2 from '../pages/Option2';
import Option3 from '../pages/Option3';
import Contact from '../pages/Contact'; // ✅ Added Contact
import Cart from '../pages/Cart';       // ✅ Added Cart
import BetterIndia from "../pages/BetterIndia";

// Add Option4, Option5
//sidebar me bhi chnages krne padte hai
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/option1" element={<Option1 />} />
      <Route path="/option2" element={<Option2 />} />
      <Route path="/option3" element={<Option3 />} />
      <Route path="/contact" element={<Contact />} /> {/* ✅ Added Contact route */}
      <Route path="/cart" element={<Cart />} />       {/* ✅ Added Cart route */}
      <Route path="/betterIndia" element={<BetterIndia />} />

      {/* Add the rest similarly */}
    </Routes>
  );
}
