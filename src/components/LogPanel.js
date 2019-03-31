import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = (props) => {

    let handleClick = () => {
        props.handleActiveDecompClick()
        if (props.activated) {
            props.handleLogs(Log.warn("DECOMMISSIONED ALL HOSTS"))
        } else {
            props.handleLogs(Log.warn("ACTIVATED ALL HOSTS"))
        }
    }

    let handleColor = () => { 
        if (props.activated) {
            return "green"
        } else {
            return "red"
        }
    }

    let handleContent = () => {
        if (props.activated) {
            return "DECOMMISSION ALL"
        } else {
            return "ACTIVATE ALL"
        }
    }

    let showAllLogs = () => {
        return props.logs.map((log, i) => {
            return <p key={i} className={log.type}>{log.msg}</p>
        })
    }

    return(
        <Segment className="HQComps" id="logPanel">
            <pre>
                {showAllLogs()}
            </pre>

            {null}
            <Button fluid onClick={handleClick} color={handleColor()} content={handleContent()} />
        </Segment>
    )
}

export default LogPanel
