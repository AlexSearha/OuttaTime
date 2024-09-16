"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Typography } from "@mui/material";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="py-4 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <Typography
          variant="h5"
          component="div"
          className="grow h-full flex items-center"
        >
          Soutenez moi !
        </Typography>
        <div className="flex gap-2">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="transition-colors hover:text-slate-700"
            aria-label="menu"
            onClick={() => window.open("https://google.com", "_blank")}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="transition-colors hover:text-slate-700"
            aria-label="menu"
            onClick={() => window.open("https://daturha.com", "_blank")}
          >
            <GitHubIcon />
          </IconButton>
        </div>
        <p className="text-xs italic">©{actualYear} Tous droits reservés</p>
      </div>
    </footer>
  );
};

export default Footer;
