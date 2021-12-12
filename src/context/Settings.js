import React, { useState } from 'react';

export const SettingContext = React.createContext();


function Settings({children}){
const [pagination, setPagination]=useState(3);
const [hide, setHide]=useState(false);

const value={
    pagination:3,
    hide:false
}

return(
    <SettingContext.Provider value={value}>
        {children}
    </SettingContext.Provider>
)

}

export default Settings;