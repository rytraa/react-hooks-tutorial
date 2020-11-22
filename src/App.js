import React from 'react'
import './App.css'

// export const UserContext = React.createContext();
// export const DateContext = React.createContext();

function App() {

  // const date = new Date().getDate()
  // const month = new Date().getMonth()
  // const year = new Date().getFullYear()

  return (
    <div className="App">
        {/* useState:-
        <HookCounter/>
        <HookCounterTwo/> 
        */}

        {/* useEffect:-
        <HookEffectOne/> 
        <HookEffectTwo/>
        <MouseContainer/>
        */}

        {/* Fetching Data using useEffect:-
        <DataFetching/> 
        */}

        {/* useContext:-
        <UserContext.Provider value={'TG'}>
          <DateContext.Provider value={`${date}/${month+1}/${year}`}>
            <ContextGrandParent/>
          </DateContext.Provider>
        </UserContext.Provider> 
        */}

        {/*useReducer:-
        <ReducerCounterOne/>
        <ReducerCounterTwo/> 
        <ReducerCounterThree/>
        <ReducerContextParent/> 
        */}



    </div>
  );
}

export default App;
