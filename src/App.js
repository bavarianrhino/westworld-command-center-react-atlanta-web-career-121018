import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const URLHost = "http://localhost:4000/hosts"


class App extends Component {

    state = {
        hosts: [],
        activeHost: null
    }

    componentDidMount() {
        fetch(URLHost)
            .then(res => res.json())
            .then(hosts => this.setState({
                hosts: hosts
            }))
    }

    handleClick = (host) => {
        this.setState({
            activeHost: host
        })
    }


  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
          <WestworldMap hosts={this.state.hosts} handleClick={this.handleClick} />
          <Headquarters hosts={this.state.hosts} activeHost={this.state.activeHost} handleClick={this.handleClick} />
      </Segment>
    )
  }
}

export default App;
