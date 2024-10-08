"use client"
import { FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

export default function Jouer() {
    const [playersNumber, setPlayersNumber] = useState("")
    const [teams, setTeams] = useState("")

    const handleChange = (event: SelectChangeEvent<string>) => {
        setPlayersNumber(event.target.value)
    }

    const handleTeamsChange = (event: SelectChangeEvent<string>) => {
        setTeams(event.target.value)
    }

    const calculateTeams = (playersNumber: number) => {
        const possibleTeams = []
        for (let i = 2; i <= Math.floor(playersNumber / 2); i++) {
            if (playersNumber % i === 0) {
                possibleTeams.push(i)
            }
        }
        return possibleTeams
    }

    return (
        <>
            <FormGroup className="flex flex-col gap-2">
                <FormControl fullWidth>
                    <InputLabel htmlFor="players-number">Nombre de joueurs</InputLabel>
                    <Select
                        labelId="players-number"
                        id="players-number"
                        value={playersNumber}
                        label="Nombre de joueurs"
                        onChange={(event) => handleChange(event)}
                    >
                        {/* Générer uniquement des nombres pairs */}
                        {Array.from({ length: 6 }, (_, i) => (i + 1) * 2).map((value) => (
                            <MenuItem key={value} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {playersNumber !== "" && (
                    <>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="teams-number">Nombre d&apos;équipes</InputLabel>
                            <Select
                                labelId="teams-number"
                                id="teams-number"
                                value={teams}
                                label="Nombre d'équipes"
                                onChange={(event) => handleTeamsChange(event)}
                            >
                                {calculateTeams(Number(playersNumber)).map((teamCount) => (
                                    <MenuItem key={teamCount} value={teamCount}>
                                        {teamCount}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </>
                )}
            </FormGroup>
        </>
    )
}
