import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import HeaderBlock from './components/HeaderBlock';

const AppList = () => {
  const items = ['First', 'Second'];

  return (<ul>
    {items.map(item => <li>{item}</li>)}
  </ul>);
};

const AppHeader = () => <h1 className="header">Hello, bro!</h1>;

const AppInput = () => {
  const placeholder = 'Type text...';

  return (<label htmlFor="search">
    <input id="search" placeholder={placeholder}/>
  </label>);
};

const App = () => <>
  <HeaderBlock/>
  <AppHeader/>
  <AppInput/>
  <AppList/>
</>;

ReactDom.render(<App/>, document.getElementById('root'));
