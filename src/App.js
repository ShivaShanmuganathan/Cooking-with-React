import React, {useState} from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()



function App() {
  const [theme, setTheme] = useState('red');
  return (
  
  <ThemeContext.Provider value={{ backgroundColor: theme }} >

    <div>

      <h1>COUNTER</h1>
      <Counter initialCount={1}/>

      <h1>COUNTER HOOKS</h1>
      <CounterHooks initialCount={1} />

    </div>

    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red'? 'blue': 'red'
      })}>Toggle Theme</button>

  </ThemeContext.Provider>

  );
}

export default App;
