import React, { memo, useMemo } from 'react';
import { isEqual } from 'lodash';

// computed values
const Child = (props) => {
  const { counter, updateCounter } = props;

  const childNumber = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 500_000_000; i++) {
      output++;
    }

    return output;
  }, []);

  // let childNumber = 0;

  // for (let i = 0; i < 500_000_000; i++) {
  //   childNumber++;
  // }

  return (
    <div style={{ width: 500, height: 500, border: '1px solid #f00' }}>
      Child - {childNumber} {counter}
      <button onClick={updateCounter}>Click</button>
    </div>
  );
};

export default memo(Child, isEqual);

// https://dmitripavlutin.com/use-react-memo-wisely
// https://reactjs.org/docs/react-api.html#reactmemo
// https://lodash.com/docs/4.17.15

// 퍼포먼스 이슈가 있을 때만 이러한 퍼포먼스 테크닉들을 사용하도록 한다. 잘못 사용하는 경우가 많기 때문이다.
