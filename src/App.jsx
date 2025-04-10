import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Widget/Layout';
import About from './Screen/About';
import Login from './Screen/Login';
import Services from './Screen/Services';
import Subscription from './Screen/Subscription';
import Additional from './Screen/Additional';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Services />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="about" element={<About />} />
          <Route path="additional" element={<Additional />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
