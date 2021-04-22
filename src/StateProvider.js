import React, { createContext, useContext, useReducer} from 'react';

// Preparing the data layer
export const StateContext = createContext();

// Wrap the app and provide data layer to every component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer (reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Now pull the information from the data layer
export const useStateValue = () => useContext(StateContext);