import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import { RoleModels, Home } from './pages';
import RoleModelDetail from './pages/RoleModelDetail'

function App() {
  console.log('APP');
  return (
    <Router>
      <CssBaseline />
      <Container
        style={{
          width: '100%',
          height: '50px',
          // border: '1px solid red',
          margin: '0 0 0 0',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h5">GateR</Typography>
        </Link>
      </Container>
      <Container
        style={{
          width: '100%',
          // border: '1px solid blue',
          padding: 0,
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/rolemodels" element={<RoleModels />} />
          <Route path="/rolemodel" element={<RoleModelDetail />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" component={Home} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
