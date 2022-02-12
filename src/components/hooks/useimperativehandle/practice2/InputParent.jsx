import React, { useRef } from 'react';

import Input from './Input';

const InputParent = () => {
  const inputRef = useRef();

  const onClickButton = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};

export default InputParent;
