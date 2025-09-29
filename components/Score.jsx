import React from "react"
import { calcScore } from "../utils/counterUtils"

export default function Score({ score, setScore }) {
    
    function changeScore(op, value) {
        setScore(prev => calcScore(prev, op, value))
    }
    
    return (
        <div className="score-count">
            <div className="score-btns">
                <button 
                    className="score-btn" 
                    onClick={() => changeScore("minus", 1)}>
                -1</button>
                <button 
                    className="score-btn"
                    onClick={() => changeScore("minus", 2)}>
                -2</button>
                <button 
                    className="score-btn"
                    onClick={() => changeScore("minus", 3)}>
                -3</button>
            </div>
            <p className="score">{score}</p>
            <div className="score-btns">
                <button 
                    className="score-btn" 
                    onClick={() => changeScore("add", 1)}>
                +1</button>
                <button 
                    className="score-btn"
                    onClick={() => changeScore("add", 2)}>
                +2</button>
                <button 
                    className="score-btn"
                    onClick={() => changeScore("add", 3)}>
                +3</button>
            </div>
        </div>
    )
}

