import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

export default function ProjectCard({ project, variant = "default", sx }) {
  const theme = useTheme();

  // Define variant styles
  const variantStyles = {
    default: {
      background: theme.palette.background.paper,
      height: 350,
      "&:hover": {
        transform: "translateY(-8px)",
        transition: "all 0.3s ease",
        boxShadow: `0 8px 32px 0 ${theme.palette.primary.main}40`,
      },
    },
    featured: {
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      height: 300,
    },
  };

  return (
    <Card
      sx={{
        // Base styles (common to all variants)
        backdropFilter: "blur(10px)",
        maxWidth: 400,
        width: "100%",
        borderRadius: 3,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        p: variant === "featured" ? 1 : 0,

        // Variant-specific styles
        ...variantStyles[variant],
        // Custom overrides
        ...sx,
        "&:active": {
          transform: "translateY(-8px) scale(0.95)",
        },
      }}
      onClick={() => {
        window.location.href = project.link;
      }}
    >
      <Box
        sx={{
          height: variant === "featured" ? "70%" : "55%",
          overflow: "hidden",
          p: 0,
          borderRadius: variant === "featured" ? 3 : 0,
        }}
      >
        <CardMedia
          component="img"
          image={project.thumbnail}
          alt="Project thumbnail"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: variant === "featured" ? 0 : 1,
          textAlign: variant === "featured" ? "center" : "left",
          p: variant === "featured" ? 0 : 2,
          pb: variant === "featured" ? 1 : 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            mb: variant === "featured" ? 1 : 0,
          }}
        >
          {project.title}
        </Typography>
        {variant !== "featured" && (
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {project.descriptionShort}
          </Typography>
        )}
      </CardContent>
      <CardActions
        sx={{
          padding: 0,
          pt: 0,
          pb: 2,
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
          {project.technologies.map((tech) => (
            <Box
              key={tech}
              sx={{
                px: 1,
                py: 0.3,
                fontSize: "0.7rem",
                color: theme.palette.text.primary,
                borderColor: theme.palette.primary.main,
                border: "1px solid",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
}
