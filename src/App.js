import { Routes, Route } from 'react-router-dom'
import PokesDek from './pages/PokesDek'
import PokeDetails from './pages/PokeDetails'
import NoMatch from './pages/NoMatch'

function App() {
  return (
      <Routes>
        <Route path="/" element={<PokesDek />} />
        <Route path='/poke/:id' element={<PokeDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}

export default App;
