import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Widget/Layout';

// Website Screens



// Auth/Login
import Login from './Screen/Website/Login';
import Customer from './Screen/WebApp/Customer';
import Employee from './Screen/WebApp/Employee';
import Services from './Screen/WebApp/Services';
import AccessRights from './Screen/WebApp/AccessRights';
import Subscription from './Screen/WebApp/Subscription';
import About from './Screen/Website/About';
import Contact from './Screen/Website/Contact';
import Dashboard from './Screen/Dashboard';
import Home from './Screen/Website/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path='home' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* MANAGEMENT ROUTES */}
          <Route path="customer" element={<Customer />} />
          <Route path="employee" element={<Employee />} />
          <Route path="services" element={<Services />} />
          <Route path="access-rights" element={<AccessRights />} />
          <Route path="plans" element={<Subscription />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
