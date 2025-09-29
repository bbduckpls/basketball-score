import React from "react"
import { increment, decrement } from "../utils/counterUtils"

export default function Timeout({ timeout, setTimeout }) {
    
    function add() {
        setTimeout(prev => increment(prev, 7))
    }
    
    function sub() {
        setTimeout(prev => decrement(prev, 0))
    }
    
    return (
        <div className="count-container">
            <h3 className="count-title">TIMEOUT</h3>
                <p className="count">{timeout}
                    <span className="total">/ 7</span>
                </p>
            <div className="btn-container">
                <button className="count-btn" onClick={add}>+</button>
                <button className="count-btn" onClick={sub}>-</button>
            </div>
        </div>
    )
}