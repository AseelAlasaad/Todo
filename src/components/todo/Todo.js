import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import "@blueprintjs/core/lib/css/blueprint.css";
// import "~@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Button, Card, FormGroup, InputGroup, Elevation, Switch } from "@blueprintjs/core";
import List from './List';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import './style.css';
import Pagination from './Pagination';
import { SettingContext } from '../../context/Settings';
function Todo(props){

  let settingValue = useContext(SettingContext);
  const [list, setList] = useState([]);
  const [endpage, setendpage] = useState(settingValue.pagination);//2
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const[show,setShow]=useState(false);
  const [completeList, setcompleteList] =useState([]);
  const [currentPage,setcurrentPage]=useState(1);
  const [showCompleted] = useState(settingValue.setHide);

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

  const paginate = (e) => {

    let start = endpage - settingValue.pagination;
    return list.slice(start, endpage);

  }

  function handleHide() {
    settingValue.setHide(settingValue.hide);
  }

  

  function showIfComplete() {
    let completeList = [];
    list.map(item => {
      if (item.complete == true) {

        completeList.push(item)
      }

    })
    setShow(true);
    setcompleteList(completeList);
  }

  const indexOfLastTodo = currentPage * parseInt(endpage);
  const indexOfFirstTodo = indexOfLastTodo - parseInt(endpage);
  const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = pageNumber => setcurrentPage(pageNumber);
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

            <Button className="bp3-intent-primary" type="submit">Add Item</Button>
          </form>

        </Card>


      </div>


      
    <TodoList toggleComplete={toggleComplete}
    paginate={paginate}
    deleteItem={deleteItem}
    list={currentTodos ? currentTodos : list}
    toggleComplete={toggleComplete}/>
    {currentTodos.length>0 && 
  <Pagination paginate={paginate}
             endpage={endpage}
             totalTodos={list.length}
             pageNumbers={pageNumbers}
             />
}

    <Button className="bp3-intent-primary" type="click" onClick={showIfComplete}>Completed Item</Button>
    {/* Create Next Previous buttons */} 

    {currentPage >1 && <button onClick={() => { setcurrentPage(currentPage - 1) }}>Previous</button>}
    {currentPage >= endpage && <button onClick={() => { setcurrentPage(currentPage + 1) }} >Next</button>}
     
   
  
      { show&&<List showIfComplete={showIfComplete}
      completeList={completeList}/> }


 
    </>
  );
};

export default Todo;
