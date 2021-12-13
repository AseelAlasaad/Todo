import React, { useState } from 'react';

export const SettingContext = React.createContext();


function Settings(props){
const [pagination, setPagination]=useState(2);
const [hide, setHide]=useState(false);

const state={
    pagination:2,
    hide:false
}

return(
    <SettingContext.Provider value={state}>
        {props.children}
    </SettingContext.Provider>
)

}

export default Settings;