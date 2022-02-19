import React, { useState, forwardRef, useImperativeHandle } from 'react';

const BasicForm = (_, ref) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      values: {
        name,
        password,
        email,
      },
    }),
    [name, password, email]
  );

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='이름을 입력하세요'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='password'
        placeholder='패스워드를 입력하세요'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type='email'
        placeholder='이메일을 입력하세요'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <select onChange={onChangeGender}>
        <option value='F'>남</option>
        <option value='M'>여</option>
      </select>
      <select onChange={onChangeDepartment}>
        <option value='develop'>개발팀</option>
        <option value='design'>디자인팀</option>
      </select>
    </div>
  );
};

export default forwardRef(BasicForm);
