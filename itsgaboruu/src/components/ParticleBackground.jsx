import React, { useCallback, useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Box } from "@mui/material";
import theme from "../theme";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("Initializing particles engine...");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      console.log("Engine loaded!");
    }).then(() => {
      console.log("Init complete!");
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false,
          },
          resize: true,
        },
      },
      particles: {
        color: {
          value: theme.palette.primary.main,
        },
        links: {
          color: theme.palette.primary.main,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 4, max: 8 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </Box>
  );
};

export default ParticleBackground;
