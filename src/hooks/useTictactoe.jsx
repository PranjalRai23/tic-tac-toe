import React, { useState } from 'react'

const useTictactoe = () => {
    const initialBoard = () => Array(9).fill(null);

    const [board, setBoard] = useState(initialBoard());
    const [isXturn, setIsXturn] = useState(true);

    const WINNING_PATTERNS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const calculateWinner = (currentBoard) => {
        for(let i=0 ; i<WINNING_PATTERNS.length ; i++){
            const [a,b,c] = WINNING_PATTERNS[i];
            if(currentBoard[a] && currentBoard[a]==currentBoard[b] && currentBoard[a]==currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        const winner = calculateWinner(board);
        if(winner || board[index])
            return;
        const newBoard = [...board];
        newBoard[index] = (isXturn ? "X" : "O");
        setBoard(newBoard);
        setIsXturn(!isXturn);
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setIsXturn(true);
    };

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if(winner){
            return `Player ${winner} wins!`
        }
        else if(!board.includes(null)){
            return "It's a draw!"
        }
        return (`Player ${isXturn ? "X" : "O"} turn`)
    };

    return {board, calculateWinner, handleClick, resetGame, getStatusMessage};
}

export default useTictactoe;