import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

// This is just to show you how this should work. But where should the log data actually get stored?
// And where should we be creating logs in the first place?
// Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
// Just remember to import it

// {/* Button below is the Activate All/Decommisssion All button */}
// <Button
//   fluid
//   color={"red"}
//   {/* This isn't always going to be the same color...*/}
//   content={"ACTIVATE ALL"}
//   {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
// />
const LogPanel = (props) => {

    const dummyLogs = () => {
        let logs = []
        logs.unshift(Log.warn("This is an example of a warn log"))
        logs.unshift(Log.notify("This is an example of a notify log"))
        logs.unshift(Log.error("This is an example of an error log"))
        return logs
    }

    let handleClick = () => {
        props.handleActiveDecompClick()
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

    return(
        <Segment className="HQComps" id="logPanel">
            <pre>
                {dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
            </pre>

            {null}
            <Button fluid onClick={handleClick} color={handleColor()} content={handleContent()} />
        </Segment>
    )
}

export default LogPanel
