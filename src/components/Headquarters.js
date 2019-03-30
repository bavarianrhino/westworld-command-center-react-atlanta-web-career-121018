import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {

    render(){
        return(
            <Grid celled='internally'>

                <Grid.Column width={8}>
                    <ColdStorage hosts={this.props.hosts} selectedHostId={this.props.selectedHostId} handleSelectClick={this.props.handleSelectClick} />
                    {/* Something goes here.... */}
                </Grid.Column>

                <Grid.Column width={5}>
                    <Details areas={this.props.areas} hosts={this.props.hosts} selectedHost={this.props.selectedHost} setNewArea={this.props.setNewArea} activateDecommissionSelectedHost={this.props.activateDecommissionSelectedHost} />
                </Grid.Column>

                <Grid.Column width={3}>
                    <LogPanel logs={this.props.logs} handleActiveDecompClick={this.props.handleActiveDecompClick} activated={this.props.activated} />
                    {/* and here. Take visual cues from the screenshot/video in the Readme. */}
                </Grid.Column>

            </Grid>
        )
    }
}

export default Headquarters;
