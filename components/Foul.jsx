import React from "react"
import { increment, decrement } from "../utils/counterUtils"

export default function Foul({ foul, setFoul }) {
    
    function add() {
        setFoul(prev => increment(prev, 4))
    }
    
    function sub() {
        setFoul(prev => decrement(prev, 0))
    }
    
    return (
        <div className="count-container">
            <h3 className="count-title">FOUL</h3>
                <p className="count">{foul}
                    <span className="total">/ 4</span>
                </p>
            <div className="btn-container">
                <button className="count-btn" onClick={add}>+</button>
                <button className="count-btn" onClick={sub}>-</button>
            </div>
        </div>
    )
}
