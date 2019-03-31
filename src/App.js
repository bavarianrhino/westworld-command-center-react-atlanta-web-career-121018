import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
import { Log } from './services/Log';

const URLHost = "http://localhost:4000/hosts"
const URLAreas = "http://localhost:4000/areas"


class App extends Component {

    state = {
        hosts: [],
        areas: [],
        selectedHost: null,
        selectedHostId: null,
        activated: false,
        logs: []
    }

    componentDidMount() {
        this.renderHosts()
        this.renderAreas()
        this.logInitialLogs()
    }

    fetchHosts = () => {
        return fetch(URLHost).then(res => res.json())
    }

    fetchAreas = () => {
        return fetch(URLAreas).then(res => res.json())
    }

    renderHosts = () => {
        this.fetchHosts()
            .then(hostsData => {
                console.log(hostsData)
                this.setState({ hosts: hostsData })
        })
    }

    renderAreas = () => {
        this.fetchAreas()
            .then(areasData => {
                console.log(areasData)
                this.setState({ areas: areasData })
            })
    }

    logInitialLogs = () => {
        const welcomeLog = Log.notify("Welcome to WestWorld!")
        this.setState({ logs: [welcomeLog, ...this.state.logs] })
    }

    handleSelectClick = (host) => {
        this.setState({ selectedHost: host, selectedHostId: host.id })
        console.log(`Host/id: ${host.firstName}${host.lastName}|${host.id} - "Is Selected"`)
    }

    activateDecommissionSelectedHost = (host) => {
        // console.log(`Host Name: ${host.firstName} ${host.lastName} -- Before setState is: ${host.active}`)
        const changeHostStatus = this.state.hosts.map(h => (h.id === host.id ? ({ ...h, active: !h.active }) : h))
        this.setState({ selectedHost: { ...host, active: !this.state.selectedHost.active } })
        this.setState({ hosts: changeHostStatus })
        // this.setState({ hosts: changeHostStatus }, () => { console.log(`Host Name: ${host.firstName} ${host.lastName} -- After setState is now:` + (this.state.hosts.find((h) => h.id === host.id).active))})
    }

    handleActiveDecompClick = () => {
        this.setState({ activated: !this.state.activated }, () => {this.activateDecommissionAllHosts()})
    }

    activateDecommissionAllHosts = () => {
        const changeHostsActivation = this.state.hosts.map(h => (h.active === this.state.activated ? h : ({ ...h, active: this.state.activated })))
        this.setState({ selectedHost: { ...this.state.selectedHost, active: this.state.activated } })
        this.setState({ hosts: changeHostsActivation }, () => {console.log(this.state.activated ? "ACTIVATED ALL HOSTS" : "DECOMMISSIONED ALL HOSTS" )})
    }

    setNewArea = (newSelectedArea, host) => {
        const changeHostArea = this.state.hosts.map(h => (h.id === host.id ? ({ ...h, area: newSelectedArea.name }) : h))
        this.setState({ selectedHost: { ...host, area: newSelectedArea.name } })
        this.setState({ hosts: changeHostArea })
    }

    handleLogs = (log) => {
        // console.log(log)
        this.setState({ logs: [log, ...this.state.logs] })
    }

    render(){
        return (
            <Segment id='app'>
                <WestworldMap hosts={this.state.hosts} areas={this.state.areas} selectedHost={this.state.selectedHost} selectedHostId={this.state.selectedHostId} handleSelectClick={this.handleSelectClick} />
                <Headquarters hosts={this.state.hosts} areas={this.state.areas} selectedHost={this.state.selectedHost} selectedHostId={this.state.selectedHostId} handleSelectClick={this.handleSelectClick} setNewArea={this.setNewArea} activateDecommissionSelectedHost={this.activateDecommissionSelectedHost} handleActiveDecompClick={this.handleActiveDecompClick} activated={this.state.activated} logs={this.state.logs} handleLogs={this.handleLogs} />
            </Segment>
        )
    }
}

export default App;
