import React from "react"
import Home from "./Home"
import Guest from "./Guest"

export default function basketballScore() {

    const [homeScore, setHomeScore] = React.useState(0)
    const [guestScore, setGuestScore] = React.useState(0)
    
    const [homeFoul, setHomeFoul] = React.useState(0)
    const [guestFoul, setGuestFoul] = React.useState(0)
    
    const [homeTimeout, setHomeTimeout] = React.useState(0)
    const [guestTimeout, setGuestTimeout] = React.useState(0)
    
    function resetGame() {
        setHomeScore(0)
        setGuestScore(0)
        setHomeFoul(0)
        setGuestFoul(0)
        setHomeTimeout(0)
        setGuestTimeout(0)
    }
    
    return (
        <div className="content">
            <h1>Score at home! 🏀</h1>
            <div className="container">
                <Home
                    score={homeScore}
                    setScore={setHomeScore}
                    foul={homeFoul}
                    setFoul={setHomeFoul}
                    timeout={homeTimeout}
                    setTimeout={setHomeTimeout}
                />
                <Guest
                    score={guestScore}
                    setScore={setGuestScore}
                    foul={guestFoul}
                    setFoul={setGuestFoul}
                    timeout={guestTimeout}
                    setTimeout={setGuestTimeout} 
                />
            </div>
            <button className="reset-btn" onClick={resetGame}>RESET GAME</button>
        </div>
    )
}