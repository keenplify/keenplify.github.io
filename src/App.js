import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
        <Container>
          <Home />
          <Home />
        </Container>
    </div>
  );
}

export default App;
