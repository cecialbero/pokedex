import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import PokesDek from './pages/PokesDek'
import PokeDetails from './pages/PokeDetails'
import NoMatch from './pages/NoMatch'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PokesDek />} />
        <Route path='/poke/:id' element={<PokeDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
