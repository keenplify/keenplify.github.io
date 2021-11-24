import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, withRouter, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import YTBG from "./components/YTBG";
import { ProjectsV2 } from "./components/ProjectsV2";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default withRouter(
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        strongoverlay: window.location.hash === "#/" ? "0" : "1",
      };
    }

    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        this.setState({
          strongoverlay: location.hash === "#/" ? "0" : "1",
        });
      });
    }
    componentWillUnmount() {
      this.unlisten();
    }

    render() {
      return (
        <HashRouter basename="/">
          <div className="App">
            <NavigationBar />
            <Container fluid style={{ overflow: "hidden" }}>
              <Switch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route path="/about" component={About} />
                <Route path="/projects" component={ProjectsV2} />
                <Route path="*" component={Home} />
              </Switch>
            </Container>
            <YTBG strongoverlay={this.state.strongoverlay} />
          </div>
        </HashRouter>
      );
    }
  }
);
