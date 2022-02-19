import React, { useEffect, useRef } from 'react';
import BasicForm from './BasicForm';

const List = () => {
  const formRef = useRef();

  const getValue = () => {
    console.log(formRef.current.values);
  };

  return (
    <>
      <BasicForm ref={formRef} />
      <button onClick={getValue}></button>
    </>
  );
};

export default List;
