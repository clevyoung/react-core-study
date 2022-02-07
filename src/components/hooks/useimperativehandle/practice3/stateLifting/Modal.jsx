import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ChildComponent({ open, onOpenModal }) {
  if (!open) return null;

  return (
    <div>
      <p>This is a modal!</p>
      <button onClick={() => onOpenModal(false)}> Close </button>
    </div>
  );
}

export default forwardRef(ChildComponent);
