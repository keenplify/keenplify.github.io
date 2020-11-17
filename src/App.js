import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
        <Container fluid>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="*" component={Home} />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
