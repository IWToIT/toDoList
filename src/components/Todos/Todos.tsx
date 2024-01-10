import React from 'react'

function Todos() {
  return (
    <div className='todos'>
      <div className="todos__list">
        <div className="todo__header">
          <div className="todo__month">06.01</div>
          <div className="todo__day">Сб</div>
        </div>
        <div className="todo__body">
          <input className="todo__input" type='text' autoComplete='none'></input>
        </div>
      </div>
    </div>
  )
}

export default Todos