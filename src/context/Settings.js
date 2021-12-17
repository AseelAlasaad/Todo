import React, { useState, useEffect} from 'react';

export const SettingContext = React.createContext();


function Settings(props){
const [pagination, setPagination]=useState(localStorage.getItem('ItemPerpage'));
const [hide, setHide]=useState(localStorage.getItem('showCompleted'));
const [sortBy, setSortBy] = useState(localStorage.getItem("SortBy"));

const state={
    pagination,
    setSortBy:setSortBy,
    hide,
    listComplete:[],
    setPagination:setPagination,
    setHide:setHide
}
// useEffect(()=>{
//     let arrayOfnumber=localStorage.getItem('ItemPerpage');
//     console.log(arrayOfnumber);
//     if(arrayOfnumber){
//         setPagination(parseInt(arrayOfnumber));
//     }
// },[])
return(
    <SettingContext.Provider value={state}>
        {props.children}
    </SettingContext.Provider>
)

}

export default Settings;