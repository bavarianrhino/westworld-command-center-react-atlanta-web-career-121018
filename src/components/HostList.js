import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

    // let renderMapedHosts = () => {
    //     props.hosts.map()
    // }

    return(
        <Card.Group itemsPerRow={6}>
            {props.hosts.map(host => (<Host key={host.id} host={host} handleSelectClick={props.handleSelectClick} />))}
        </Card.Group>
    )
}

export default HostList
