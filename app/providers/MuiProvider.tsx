"use client"
import React from "react"
import { createTheme, ThemeProvider } from "@mui/material"
import { MuiProviderType } from "../../@types/types"

export default function MuiProvider({ children }: MuiProviderType) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#E3D026",
                light: "#E9DB5D",
                dark: "#A29415",
                contrastText: "#242105",
            },
        },
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        ":hover": {
                            backgroundColor: "#fef08a",
                        },
                    },
                },
            },
        },
    })

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
