import { Box, Typography, IconButton, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "./projectsData";

const MotionBox = motion(Box);

export const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="projetos"
      sx={{
        width: "100vw",
        backgroundColor: "background.default",
        px: { xs: "4vw", md: "2vw" },
        py: { xs: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🔹 Título da seção */}
      <Typography
        variant="h3"
        fontWeight={800}
        color="primary"
        sx={{
          textAlign: "center",
          mb: { xs: 2, md: 8.0 }, // ⬆️ espaçamento mais confortável
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Projetos
      </Typography>

      {/* 🔹 Lista de projetos */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={project.id}
            sx={{
              width: "100%",
              maxWidth: "92vw",
              mx: "auto",
              mb: { xs: 1.2, md: 1.5 },
            }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
                alignItems: "center",
                justifyContent: "flex-start",
                gap: { xs: 1.4, md: 2 },
                width: "100%",
              }}
            >
              {/* 🔹 Imagem do projeto */}
              <Box
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: 240 },
                  display: "flex",
                  justifyContent: isEven ? "flex-start" : "flex-end",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: { xs: "85%", md: "100%" },
                    borderRadius: "10px",
                    objectFit: "cover",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                    transition: "transform 0.18s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
              </Box>

              {/* 🔹 Bloco de texto + botão GitHub */}
              <Stack
                spacing={{ xs: 1.2, md: 1.4 }}
                sx={{
                  flex: { xs: "1 1 auto", md: "0 0 420px" },
                  maxWidth: { xs: "100%", md: 420 },
                  alignItems: { xs: "center", md: isEven ? "flex-start" : "flex-end" },
                  textAlign: { xs: "center", md: isEven ? "left" : "right" },
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "white",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.55,
                    textAlign: "justify",
                  }}
                >
                  {project.description}
                </Typography>

                <IconButton
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)",
                    transition: "transform 0.22s ease, color 0.22s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      color: "#5170ff",
                    },
                  }}
                >
                  <FaGithub size={24} />
                </IconButton>
              </Stack>
            </MotionBox>

            {/* 🔹 Divider compacto */}
            <Box
              sx={{
                width: { xs: "92%", md: "85%" },
                height: "1.5px",
                backgroundColor: "rgba(255,255,255,0.22)",
                mt: { xs: 1, md: 1.2 },
                mx: "auto",
                borderRadius: "1px",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};
