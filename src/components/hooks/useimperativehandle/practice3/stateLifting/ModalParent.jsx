import React, { useRef, useState } from 'react';
import Child from './Modal';

const ParentComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <p>상위 컴포넌트</p>
      <Child open={isOpen} onOpenModal={setIsOpen} />

      <button onClick={handleOpenModal}>Open modal</button>
    </div>
  );
};

export default ParentComponent;
