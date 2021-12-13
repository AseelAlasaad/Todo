import React from "react";
import { Button, Card, FormGroup, InputGroup, Elevation, Switch } from "@blueprintjs/core";

function TodoList(props) {
    return (
        <>
            {props.paginate().map(item => (

                <div key={item.id}>
                    <p>{item.text}</p>
                    <p><small>Assigned to: {item.assignee}</small></p>
                    <p><small>Difficulty: {item.difficulty}</small></p>
                    <Button type="button" class="bp3-button.bp3-intent-danger" onClick={() => props.deleteItem((item.id))}>delete</Button>
                    {/* <button onClick={() => deleteItem((item.id))}> delete</button> */}
                    {/* <Switch  label="Complete" onClick={() => toggleComplete(item.id)}/>{item.complete ? true : false} */}
                    <div onClick={() =>props.toggleComplete(item.id)}><Button className='bp3-icon'>{item.complete ? "Complete" : "Pending"}</Button></div>

                    <hr />

                </div>
            ))}
        </>
    )
}
export default TodoList;