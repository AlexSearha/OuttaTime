"use client"
import useTimer from "@/hooks/useTimer"
import { Button } from "@mui/material"
import moment from "moment"

export default function TimeFunction() {
    const { time, isPaused, setIsPaused, isFinished, setIsStarted, isStarted } = useTimer({
        timeToSet: 30,
        started: false,
    })
    return (
        <div className="flex flex-col gap-2">
            <div id="timer" className="text-7xl">
                {moment.utc(time * 1000).format("ss")}
            </div>
            <div>
                {!isStarted && (
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-44 h-14 rounded font-bold bg-green-600 text-white transition-colors hover:bg-green-800"
                        onClick={() => setIsStarted(!isStarted)}
                    >
                        Demarrer
                    </Button>
                )}
                {isStarted && (
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-44 h-14 rounded font-bold "
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        {isPaused ? "Reprendre" : "Pause"}
                    </Button>
                )}
            </div>
        </div>
    )
}
