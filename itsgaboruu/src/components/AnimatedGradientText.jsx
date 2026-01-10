import { Typography, useTheme } from "@mui/material";

export default function AnimatedGradientText({
  variant = "h3",
  children,
  sx = {},
  colors,
  ...props
}) {
  const theme = useTheme();

  // Default colors based on theme if not provided
  const defaultColors = {
    start: theme.palette.primary.main,
    middle: theme.palette.primary.light,
    end: theme.palette.primary.main,
  };

  const gradientColors = colors || defaultColors;

  return (
    <Typography
      variant={variant}
      sx={{
        background: `linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: "center",
        backgroundClip: "text",
        animation: "shine 5s linear infinite",
        fontFamily: "Arial Black",
        "@keyframes shine": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
