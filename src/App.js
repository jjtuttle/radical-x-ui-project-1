import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SidePanel from './components/SidePanel';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <div className="">
          <p className='text-4xl text-bold'>Internships</p>

          {/* Top Nav Comp. */}

          <SidePanel />

          {/* Middle Graph Comp. */}

          {/* Bottom  Internship Completion Comp.*/}

        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
