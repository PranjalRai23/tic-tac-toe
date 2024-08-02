import React from 'react'
import { useState } from 'react';
import useTictactoe from '../hooks/useTictactoe';

const Tictactoe = () => {

  const{board, calculateWinner, handleClick, resetGame, getStatusMessage} = useTictactoe();
  
  return (
    <div className='game'>
      <div className='status'>
        {getStatusMessage()}
        <button className='reset' onClick={resetGame}>Reset</button>
      </div>

      <div className='board'>
        {board.map((b, index) => {
          return <button className="cell" key={index} onClick={() => handleClick(index)} disabled={b!==null}>
            {b}
          </button>
        })}
      </div>
    </div>
  )
}

export default Tictactoe;