"use client"
import { Button, TextField } from "@mui/material"
import { FormEvent, useState } from "react"
import generatePrompts from "../utils/openai"

export default function Page() {
    const [prompts, setPrompts] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const responseAi = generatePrompts(prompts)
        console.log(responseAi)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
            <TextField type="text" name="prompt" id="prompt" onChange={(e) => setPrompts(e.target.value)} />
            <Button variant="contained" type="submit">
                Generate
            </Button>
        </form>
    )
}
