import React from 'react';

// this returns an obj w/ Consumer and Provider properties that are also objects
const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;

