import { Typography } from "@mui/material";

export default function AnimatedGradientText({
  variant = "h3",
  children,
  sx = {},
  colors = {},
  ...props
}) {
  return (
    <Typography
      variant={variant}
      sx={{
        background: `linear-gradient(90deg, ${colors.start} 0%, ${colors.middle} 50%, ${colors.end} 100%)`,
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
