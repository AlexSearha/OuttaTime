"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PositionedMenu from "./menu/Menu";

export default function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        className="h-16 text-zinc-800 bg-yellow-200 border-b-[1px] border-zinc-950/30 shadow-sm"
      >
        <Toolbar className="h-full">
          <Typography
            variant="h6"
            component="div"
            className="grow h-full flex items-center"
          >
            Outta Time !
          </Typography>
          <PositionedMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
