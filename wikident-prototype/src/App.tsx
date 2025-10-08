import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import PatientListPage from './pages/PatientListPage';
import PatientCardPage from './pages/PatientCardPage';
import SettingsPage from './pages/SettingsPage';

// Navigation component to handle active states
const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-dark-300/50 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold text-white">Wikident</span>
              <span className="text-gray-400 text-sm ml-4">Prototype Demo</span>
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/')
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-400 text-gray-300 hover:bg-dark-300 hover:text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/calendar"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/calendar')
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-400 text-gray-300 hover:bg-dark-300 hover:text-white'
              }`}
            >
              Kalendář
            </Link>
            <Link
              to="/patients"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/patients')
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-400 text-gray-300 hover:bg-dark-300 hover:text-white'
              }`}
            >
              Pacienti
            </Link>
            <Link
              to="/settings"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/settings')
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-400 text-gray-300 hover:bg-dark-300 hover:text-white'
              }`}
            >
              Nastavení
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Online - Demo Mode
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-400">
        <Navigation />
        
        {/* Page Content */}
        <div className="w-full">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/patients" element={<PatientListPage />} />
            <Route path="/patients/:id" element={<PatientCardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;