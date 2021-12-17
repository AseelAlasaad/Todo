import React from "react";
import { Button, Card, FormGroup, InputGroup, Elevation, Switch } from "@blueprintjs/core";
function TodoList(props) {
    return (
        <>
            {props.list.map(item => (

                <div key={item.id}>
                    <p>{item.text}</p>
                    <p><small>Assigned to: {item.assignee}</small></p>
                    <p><small>Difficulty: {item.difficulty}</small></p>
                    <Button className='danger'  onClick={() => props.deleteItem((item.id))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg></Button>
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