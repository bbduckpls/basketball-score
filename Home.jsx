import React from "react"
import Score from "./components/Score"
import Foul from "./components/Foul"
import Timeout from "./components/Timeout"

export default function Home({ score, setScore, foul, setFoul, timeout, setTimeout }) {
    return (
        <div className="section">
            <h2>HOME</h2>
            <Score 
                score={score}
                setScore={setScore}
            />
            <Foul 
                foul={foul}
                setFoul={setFoul}
            />
            <Timeout 
                timeout={timeout}
                setTimeout={setTimeout}
            />
        </div>
    )
}