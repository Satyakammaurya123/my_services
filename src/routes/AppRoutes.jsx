import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Option1 from '../pages/Option1';
import Option2 from '../pages/Option2';
import Option3 from '../pages/Option3';
import Contact from '../pages/Contact'; // ✅ Added Contact
import Cart from '../pages/Cart';       // ✅ Added Cart
import BetterIndia from "../pages/BetterIndia";
import My_Games from '../pages/My_Games';

// now will also import from other folder like \games
import Snake_game from '../games/Snake_game';



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
      <Route path="/game" element={<My_Games />} />
      <Route path="/snake" element={<Snake_game />} />


      {/* Add the rest similarly */}
    </Routes>
  );
}
