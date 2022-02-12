import { forwardRef, useImperativeHandle, useRef } from 'react';

function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} />;
}

export default forwardRef(Input);
