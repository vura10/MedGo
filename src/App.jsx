import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './components/Dashboard';

import './App.css';
import sidebarItems from './data/sidebarItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<DashboardLayout />}>

          <Route index element={<Dashboard />} />
          {sidebarItems
            .filter(section => section.basePath && section.items.some(item => item.path && item.element))
            .map((section, index) =>
              section.items.map((item, subIndex) => (
                <Route
                  key={`${index}-${subIndex}`}
                  path={`${section.basePath}/${item.path}`}
                  element={item.element}
                />
              ))
            )}
          <Route path="*" element={<div className="p-6">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;