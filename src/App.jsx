import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';


// for now just see the code - and analysis karte rha karo every week do chaar baar bhi dekhte rhe to aa hi jayega with time
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AppProvider>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} />
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
