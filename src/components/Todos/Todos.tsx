import React, { FC, useState } from 'react';

const Todos: FC = () => {
  return (
    <div className="todos">
      <div className="todos__list">
        <div className="todos__header">
          <div className="todos__month">13.01</div>
          <div className="todos__day">Сб</div>
        </div>
        <div className="todos__body">
          <input
            className="todos__input"
            type="text"
            autoComplete="none"
            placeholder="Нажмите на поле ввода текста, для того, чтобы добавить задачу"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Todos;
