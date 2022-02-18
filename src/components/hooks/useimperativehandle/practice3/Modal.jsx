import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ChildComponent(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: (value) => setIsOpen(value),
  }));

  if (!isOpen) return null;

  return (
    <div>
      <p>This is a modal!</p>
      <button onClick={() => setIsOpen(false)}> Close </button>
    </div>
  );
}

export default forwardRef(ChildComponent); // useImperativeHandle에 정의된 openModal 함수를 노출하기 위해 하위 컴포넌트를 래핑
