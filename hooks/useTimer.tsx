import { useEffect, useState } from "react"
import { CountdownProps } from "../app/@types/types"

export default function useTimer({ timeToSet, started = true, reset = false }: CountdownProps) {
    const [time, setTime] = useState(timeToSet)
    const [isPaused, setIsPaused] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [isStarted, setIsStarted] = useState(started)
    const [isReset, setIsReset] = useState(reset)

    useEffect(() => {
        if (isStarted) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 0 || isPaused) {
                        clearInterval(intervalId)
                        setIsFinished(true)
                        return prevTime
                    }
                    return prevTime - 1
                })
            }, 1000)

            return () => clearInterval(intervalId)
        } else if (isReset) {
            setTime(timeToSet)
            setIsFinished(false)
            setIsReset(false)
        }
    }, [isPaused, isStarted, isReset])

    return { time, isPaused, setIsPaused, isFinished, isStarted, setIsStarted, setIsReset }
}
