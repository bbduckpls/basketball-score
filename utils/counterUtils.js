export function increment(currentValue, max) {
    if (currentValue < max) {
        return currentValue + 1
    } else {
        return currentValue
    }
}

export function decrement(currentValue, min) {
    if (currentValue > min) {
        return currentValue - 1
    } else {
        return currentValue
    }
}

export function calcScore(currentScore, op, value) {
    if (op === "add") {
        return currentScore + value
    } 
    
    if (op === "minus") {
        if (currentScore < value) {
            return 0
        }
        return currentScore - value
    }
}