import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Option1 from '../pages/Option1';
import Option2 from '../pages/Option2';
// Add Option3, Option4, Option5

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/option1" element={<Option1 />} />
      <Route path="/option2" element={<Option2 />} />
      {/* Add the rest similarly */}
    </Routes>
  );
}
