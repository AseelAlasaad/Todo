import React, {useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import "@blueprintjs/core/lib/css/blueprint.css";
// import "~@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Button, Card,FormGroup,InputGroup ,Elevation,Switch } from "@blueprintjs/core";

import { v4 as uuid } from 'uuid';
import './style.css';
import { SettingContext } from '../../context/Settings';
const ToDo = (props) => {

  let settingValue=useContext(SettingContext);
  const [list, setList] = useState([]);
  const[endpage,setendpage]=useState(settingValue.pagination);//2
  const[show,setShow]=useState(settingValue.hide);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const paginate=(e)=>{
    
    let start=endpage - settingValue.pagination;
    return list.slice(start,endpage); 

  }

  const Next=(e)=>{
    e.preventDefault();
    setendpage(endpage + settingValue.pagination);
   

  }

  
  const Previous=(e)=>{
    e.preventDefault();
    setendpage(endpage - settingValue.pagination);


  }
  const showIfComplete=(e)=>{
    e.preventDefault();
    setIncomplete(true)
  }

  return (
    <>
      <div className="Classes.ELEVATION_*" class='app'>
      <Card interactive={true} elevation={Elevation.TWO} >
        <header class='header'>
          <h1 className="h1">To Do List: {incomplete} items pending</h1>
        </header>
          <h2>Add To Do Item</h2>
        <form onSubmit={handleSubmit}>
        <FormGroup label="To Do Item" >
          <InputGroup onChange={handleChange} name="text" type="text" placeholder="Item Details"  ></InputGroup>
      
          </FormGroup>
          <FormGroup label="Assigned To" >
          <InputGroup onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name"></InputGroup>
      
          </FormGroup>
          <FormGroup label="Difficulty" >
          <InputGroup onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" >
          </InputGroup>
      
          </FormGroup>
          <FormGroup>
          </FormGroup>
        
            <Button  className="bp3-intent-primary"   type="submit">Add Item</Button>
        </form>
      
      </Card>
    
 
</div>


    
{paginate().map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <button onClick={()=> deleteItem((item.id))}> delete</button>
          {/* <Switch checked={settingValue.hide === true} label="Change" onChange={settingValue.toggleComplete} /> */}
          <div onClick={() => toggleComplete(item.id)}><button>{item.complete ? "Complete" : "Pending"}</button></div>
          <hr />
        </div>
      ))}

   <button onClick={Previous}> Previous</button>
   <button onClick={Next}> Next</button>

    </>
  );
};

export default ToDo;
