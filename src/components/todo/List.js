import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
// import "~@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Card, Elevation } from "@blueprintjs/core";
function List(props) {
    return (
        <>

            <Card interactive={true} elevation={Elevation.TWO}>
                <p>Completed Task</p>
                {props.completeList.map(item => (

                    <div key={item.id}>
                        <p>{item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <hr />

                    </div>
                ))}
            </Card>

        </>

    );




}

export default List;