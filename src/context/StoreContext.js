import React from 'react'

export const Mycontext = React.createContext();

const stores = [
    {
        day: 'Monday',
        todo: 'Meeting on 7:00 am'
    },
    {
        day: 'Tuesday',
        todo: 'Finish issue and start new project'
    }
]

export default function StoreContext(props) {
    return (
        <Mycontext.Provider value={[stores]}>
            {props.children}
        </Mycontext.Provider>
    )
}
