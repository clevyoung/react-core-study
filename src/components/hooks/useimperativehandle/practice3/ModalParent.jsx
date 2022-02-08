import React, { useRef } from 'react';
import Child from './Modal';

const ParentComponent = () => {
  const childRef = useRef(null);

  const handleOpenModal = () => {
    childRef.current.openModal(true);
  };

  return (
    <div>
      <p>상위 컴포넌트</p>
      <Child ref={childRef} />

      <button onClick={() => handleOpenModal(true)}>Open modal</button>
    </div>
  );
};

export default ParentComponent;
