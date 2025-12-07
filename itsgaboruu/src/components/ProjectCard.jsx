import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import theme from "../theme";

// Define variant styles
const variantStyles = {
  default: {
    background: "rgba(27, 27, 27, 0.8)",
    height: 350,
    "&:hover": {
      transform: "translateY(-8px)",
      transition: "all 0.3s ease",
    },
  },
  featured: {
    background: "rgba(27, 27, 27, 0.5)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    height: 300,
  },
};

export default function ProjectCard({ project, variant = "default", sx }) {
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
          sx={{ color: "#fff", mb: variant === "featured" ? 1 : 0 }}
        >
          {project.title}
        </Typography>
        {variant !== "featured" && (
          <Typography variant="body2" sx={{ color: "#bbbbbb" }}>
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
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.3)",
                border: "0.1px solid",
                // borderRadius: 2,
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
