"use client";

import { AppBar, Toolbar, Typography, Button, Stack, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "@/context/ThemeRegistry";

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Rajvardhan Jadhav
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/experience">Experience</Button>
          <Button color="inherit" href="/projects">Projects</Button>
          <Button color="inherit" href="/skills">Skills / Tools</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
