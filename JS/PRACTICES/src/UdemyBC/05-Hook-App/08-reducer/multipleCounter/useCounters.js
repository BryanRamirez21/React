import React from 'react'

export const useCounters = (onAction) => {

    const generateBaseC = () => {
        return {
            id: new Date().getTime() * 3,
            counter: 0
        }
    }

    const handleNewC = () => {
        const baseC = generateBaseC();
        onAction("newCounter", baseC);
    }
    const handleAdd   = (counterId) => {onAction("add", counterId)}
    const handleSustr = (counterId) => {onAction("sust", counterId)}
    const handleReset = (counterId) => {onAction("reset", counterId)}
    const handleDelet = (counterId) => {onAction("delete", counterId)}

    return {
        handleNewC,
        handleAdd,
        handleSustr,
        handleReset,
        handleDelet
    }
}
