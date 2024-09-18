import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; // Importe o arquivo de rotas

function App() {
  return (
    <Router>
      <AppRoutes /> {/* Use o componente de rotas aqui */}
    </Router>
  );
}

export default App;