import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countryDetailes/:cca3" element={<CountryDetail />} />
    </Routes>
  );
}

export default App;
