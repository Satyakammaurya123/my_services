import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';



// for now just see the code - and analysis karte rha karo every week do chaar baar bhi dekhte rhe to aa hi jayega with time
// backend python se try krne ka try kr sakte but uska alag repo rakhenge ya see if isi me seperate folder banake ho jaaye to

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // ✅ create ref for sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // ✅ Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <AppProvider>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <div ref={sidebarRef}>
          <Sidebar isOpen={sidebarOpen} />
        </div>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
