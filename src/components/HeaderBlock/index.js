import React from 'react';
import s from './HeaderBlock.module.scss';
import ReactLogoPng from '../../logo.svg';

const HeaderBlock = () => {
  return (
      <div className={s.cover}>
        <div className={s.wrap}>
          <h1 className={s.header}>Hello</h1>
          <img src={ReactLogoPng} alt="react"/>
          <p className={s.decr}>words, words, words</p>
        </div>
      </div>
  );
};

export default HeaderBlock;
