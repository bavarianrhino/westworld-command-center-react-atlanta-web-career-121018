import React, { Component} from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';


class WestworldMap extends Component {

    mapAreas = () => {
        return this.props.areas.map(area => {
            return <Area key={area.id} area={area} hosts={this.props.hosts} selectedHostId={this.props.selectedHostId} handleSelectClick={this.props.handleSelectClick} />
        })
    }

    render (){
        return (
            <Segment id="map" >
                {this.mapAreas()}
            </Segment>
        )
    }
}

export default WestworldMap
// {this.state.areas.map(area => <Area area={area} hosts={this.props.hosts} handleClick={this.props.handleClick} />)}
