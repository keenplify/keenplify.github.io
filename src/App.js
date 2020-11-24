import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import { Route, withRouter } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';

import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import YTBG from './components/YTBG'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default withRouter(class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      strongoverlay: (window.location.pathname === "/") ? ("0"): ("1")
    }
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log(location);
      this.setState({
        strongoverlay: (location.pathname === "/") ? ("0"):("1")
      })
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }
  
  render() {
    return (
      <div className="App">
        
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
          <YTBG strongoverlay={this.state.strongoverlay}/>
      </div>
    );
  }
})