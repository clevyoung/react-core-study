import React from 'react';
import { useState, useCallback } from 'react';
import Child from './Child';

const Counter = () => {
  // 컴포넌트 리렌더링 1. 상태가 바뀔 때 2. props가 바뀔 때 3. 부모가 rerender되면 자식은 무조건 rerender
  /**
   * Memoization
   * Memoization is a speed optimization technique in programming, where given a function, you return a cached version of the output if the same inputs are used.
   * A Memoized function remembers the results of an output for a given set of inputs.
   * In react, we can memoize components (where the inputs are props), functions, or just a regular computed value.
   * When memoizing components, it does a shallow comparison (by default) of the props, and if it sees that is has changed, then it will re-render
   */
  const [state, setState] = useState(0);
  const [input, setInput] = useState('');

  // useCallback - what this does is it will memoize your function
  const updateCounterFromChild = useCallback(() => {
    setState(state + 1);
  }, [state]);
  // it won't recalculate this function unless one of the dependencies changes

  const arr = [1, 2, 3];

  return (
    <div>
      {state}
      <button onClick={() => setState((prev) => prev + 1)}>증가</button>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* memo 를 사용해서 Child컴포넌트를 래핑했는데도 props로 updateCounter 함수를 전달한 이후에  왜 Child컴포넌트가 리렌더링이 될까? */}
      {/* 우리는 inline function을 만들었고 부모 컴포넌트가 리렌더링할 때마다 함수를 재정의하고 있다.*/}
      <Child arr={arr} counter={state} updateCounter={updateCounterFromChild} />
    </div>
  );
};

export default Counter;
