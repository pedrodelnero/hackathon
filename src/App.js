import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { RoleModels, RoleModelDetail, Home } from './pages';

function App() {
  console.log('APP');
  return (
    <Router className="App">
      <Routes>
        <Route path="/rolemodels" element={<RoleModels />} />
        <Route path="/rolemodel/?id" element={<RoleModelDetail />} />
        <Route exact path="/" element={<Home />} />
        {/* <Route path="*" component={Home} /> */}
      </Routes>
    </Router>
  );
}

export default App;
