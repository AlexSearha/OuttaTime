"use client"
import useTimer from "@/hooks/useTimer"
import moment from "moment"

export default function TimeFunction() {
    const { time, isPaused, setIsPaused, isFinished } = useTimer({ timeToSet: 30 })
    return (
        <div className="flex flex-col gap-2">
            <div id="timer" className="text-5xl">
                {moment.utc(time * 1000).format("ss")}
            </div>
            <div>
                {!isFinished ? (
                    <button
                        className="bg-white w-20 h-14 border-2 border-black rounded text-black"
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        {isPaused ? "Reprendre" : "Pause"}
                    </button>
                ) : (
                    <button
                        className="bg-white w-20 h-14 border-2 border-black rounded text-black"
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        Suivant
                    </button>
                )}
            </div>
        </div>
    )
}
