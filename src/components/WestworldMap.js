import React, { Component} from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';


const URLAreas = "http://localhost:4000/areas"


class WestworldMap extends Component {

    state = {
        areas: []
    }

    componentDidMount() {
        fetch(URLAreas)
            .then(res => res.json())
            .then(areas => this.setState({
                areas: areas
            }))
    }

    render (){
        return (
            <Segment id="map" >
                {this.state.areas.map(area => <Area area={area} hosts={this.props.hosts} handleClick={this.props.handleClick} />)}
            </Segment>
        )
    }
}

export default WestworldMap
