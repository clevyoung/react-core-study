import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Counter = (_, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => setCount((prev) => prev + 1),
  }));

  return <div>{count}</div>;
};

export default forwardRef(Counter);
