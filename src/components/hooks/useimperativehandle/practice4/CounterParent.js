import React, { useRef } from 'react';

import Counter from './Counter';

const CounterParent = () => {
  const counterRef = useRef(null);

  const onClickUpdate = () => {
    counterRef.current.increment();
  };

  return (
    <>
      <Counter ref={counterRef} />
      <button onClick={onClickUpdate}>증가</button>
    </>
  );
};

export default CounterParent;
