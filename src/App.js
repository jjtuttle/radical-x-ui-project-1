import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Dashboard from './pages/Dashboard';
// import SidePanel from './components/SidePanel';

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} className='' />
      </Routes>



    </BrowserRouter>
  );
}

export default App;
