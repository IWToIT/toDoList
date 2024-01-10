import React, { FC } from 'react';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import './scss/app.scss';


const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Todos />
    </div>
  );
};

export default App;
