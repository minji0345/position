import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  token: '',
  username: '',
  teams: [],
  tasks: [],
  schedules: []
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { token } = action.data;
      localStorage.setItem('token', token);
      return {
        token
      };

    case 'LOGOUT_USER':
      localStorage.removeItem('token')
      return initialState

    case 'GET_USER_INFO':
      const { username, tasks, teams, schedules } = action.data;
      return {
        ...state,
        username,
        teams,
        tasks,
        schedules
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const UserProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

export const useUserStateContext = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('cannot find UserStateProvider');
  }

  return context;
}

export const useUserDispatchContext = () => {
  const context = useContext(UserDispatchContext);
  if (!context) {
    throw new Error('cannot find UserDispatchProvider');
  }

  return context;
}

export default UserProvider;