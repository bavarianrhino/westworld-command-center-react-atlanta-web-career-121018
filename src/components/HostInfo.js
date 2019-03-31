import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log';


class HostInfo extends Component {

    renderAreas = () => {
       const options = [{ key: "high_plains", text: "High Plains", value: "high_plains" },
                  { key: "lowlands", text: "Lowlands", value: "lowlands" },
                  { key: "under_construction", text: "Under Construction", value: "under_construction" },
                  { key: "pariah", text: "Pariah", value: "pariah" },
                  { key: "python_pass", text: "Python Pass", value: "python_pass" },
                  { key: "badlands", text: "Badlands", value: "badlands" }]
        return options;
    }

    handleChange = (e, {value}) => {
        let newSelectedArea = this.props.areas.find(area => area.name === value)
        let hostsInNewSelectedArea = this.props.hosts.filter(host => host.area === value)

        if (newSelectedArea.limit < (hostsInNewSelectedArea.length + 1)) {
            // addLog(Log.error(`Too many hosts. `))
            this.props.handleLogs(Log.error(`Too many hosts. Cannot add ${this.props.selectedHost.firstName} to ${newSelectedArea.name}.`))
        } else {
            // addLog(Log.notify(`set in area`))
            this.props.handleLogs(Log.notify(`${this.props.selectedHost.firstName} set in area ${newSelectedArea.name}`))
            this.props.setNewArea(newSelectedArea, this.props.selectedHost)
        }
    }

    toggle = () => {
        this.props.activateDecommissionSelectedHost(this.props.selectedHost)
    }
    
    render(){
        return (
            <Grid>
                <Grid.Column width={6}>
                    <Image src={this.props.selectedHost.imageUrl} floated='left' size='small' className="hostImg" />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                {this.props.selectedHost.name} | {this.props.selectedHost.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
                            </Card.Header>
                            <Card.Meta>
                                <Radio onChange={this.toggle} label={this.props.selectedHost.active ? "Active" : "Decommissioned"} checked={this.props.selectedHost.active} slider />
                            </Card.Meta>
                            <Divider />
                            Current Area: {this.props.selectedHost.area}
                                <Dropdown onChange={this.handleChange} value={this.props.selectedHost.area} options={this.renderAreas()} selection />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        )
    }
}

export default HostInfo
// addLog(Log.notify(`${this.props.selectedHost.firstName} set in area ${newArea.namesObject.text}`))