import { React, useState } from 'react';
import { Hoge } from './components/Hoge';

function App() {
  const [state, setState] = useState({
    key01: { hoge: 'hoge', fuga: 'fuga', id: 'key01', },
    key02: { hoge: 'hoge', fuga: 'fuga', id: 'key02', },
    key03: { hoge: 'hoge', fuga: 'fuga', id: 'key03', },
  });
  const handleChange = (e) => {
    setState(createNewState(state, getValue(e)))
  }
  const createNewState = (state, newData) => {
    return { ...state, ...newData };
  };

  const getValue = (e) => {
    return JSON.parse(e.target.value)
  };
  // const newHoge = { key02: { hoge: 'hoge2', fuga: 'fuga2', id: 'key02', } }
  return (
    <div className="App">
      <h1>hoge</h1>
      {/* <button
        value={JSON.stringify(newHoge)}
        onClick={(e) => handleChange(e)}
      >hoge</button> */}
      {
        JSON.stringify(state)
      }
      {
        Object.values(state).map((x, i) => <Hoge key={i} id={x.id} handleChange={handleChange} num={i} />)
      }
    </div>
  );
}

export default App;
