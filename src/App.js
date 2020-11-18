import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { Container } from 'react-bootstrap'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import YouTube from 'react-youtube';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const YT = styled.div`
    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;
    pointer-events: none;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    &:before {
      content: "";
      z-index: 0;
      width: 100vw;
      height: 100vh;
      position:fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.9)
    }
`

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Container fluid>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="*" component={Home} />
            </AnimatedSwitch>
        </Container>
      </Router>
    
      <YT>
          <YouTube videoId="pm2U3QznMOg" opts={{
              height: window.screen.height,
              width: window.screen.width,
              playerVars: {
                  autoplay: 1,
                  controls: 0,
                  mute: 1,
                  loop: 1,
                  disablekb: 1,
                  playlist: "pm2U3QznMOg"
              },
          }}/>
      </YT>
    </div>
  );
}

export default App;
