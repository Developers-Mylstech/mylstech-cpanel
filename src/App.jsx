import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Widget/Layout';
import About from './Screen/About';
import Contact from './Screen/Contact';
import Login from './Screen/Login';
import Services from './Screen/Services';
import Subscription from './Screen/Subscription';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />

      
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="subscription" element={<Subscription />} />
          <Route index element={<Services />} />
          {/* default/dashboard home */}
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
