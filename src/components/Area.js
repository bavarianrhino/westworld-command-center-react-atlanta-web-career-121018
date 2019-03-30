import React from 'react';
import '../stylesheets/Area.css'
import _ from "lodash"
import HostList from './HostList'

// <h3 className='labels'>{props.area.name.replace(/_/g, " ").charAt(0).toUpperCase()}</h3>

const Area = (props) => (

    <div className='area' id={props.area.name}>
        <h3 className='labels'>{_.startCase(props.area.name)}</h3>
        <HostList hosts={props.hosts.filter(host => (host.active && (host.area === props.area.name)))} selectedHostId={props.selectedHostId} handleSelectClick={props.handleSelectClick} />
    </div>
)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
