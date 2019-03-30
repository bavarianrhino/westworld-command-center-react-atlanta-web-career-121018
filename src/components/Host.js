import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
// {/* note: The className "host selected" renders a different style than simply "host". */}

const Host = (props) => {
    // let renderClicked = props.host.selected ? "host selected" : "host";
    let renderClicked = () => (props.host.id === props.selectedHostId) ? "host selected" : "host";

    return(
        <Card className={renderClicked()}
              onClick={() => {props.handleSelectClick(props.host)}}
              image={props.host.imageUrl}
              raised
        />
    )
}

export default Host
