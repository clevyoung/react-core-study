import React from 'react';
import './App.css';
import List from './components/hooks/useimperativehandle/practice1/List';
import ModalParent from './components/hooks/useimperativehandle/practice3/stateLifting/ModalParent';
import ModalParent2 from './components/hooks/useimperativehandle/practice3/ModalParent';
import InputParent from './components/hooks/useimperativehandle/practice2/InputParent';
import CounterParent from './components/hooks/useimperativehandle/practice4/CounterParent';
import Counter from './components/hooks/useMemo/practice1/Counter';

function App() {
  return (
    <div className='App'>
      {/* <List /> */}
      {/* <ModalParent />
      <ModalParent2 /> */}
      {/* <CounterParent /> */}
      <Counter />
      {/* <InputParent /> */}
    </div>
  );
}

export default App;
