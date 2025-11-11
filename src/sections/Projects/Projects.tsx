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
        py: { xs: 5, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, md: 4 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        color="primary"
        sx={{
          textAlign: "center",
          mb: { xs: 2, md: 3 },
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Projetos
      </Typography>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={project.id}
            sx={{
              width: "100%",
              maxWidth: "92vw",
              mx: "auto",
            }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                gap: 0,
              }}
            >
              {/* 🔹 Imagem */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", md: "auto" },
                  display: "flex",
                  justifyContent: isEven ? "flex-start" : "flex-end",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: { xs: "85%", md: 260 },
                    borderRadius: "10px",
                    objectFit: "cover",
                    filter: "drop-shadow(0 6px 16px rgba(81,112,255,0.25))",
                    transition: "transform 0.2s ease, filter 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0 8px 22px rgba(81,112,255,0.35))",
                    },
                  }}
                />
              </Box>

              {/* 🔹 Texto + botão do GitHub */}
              <Stack
                spacing={{ xs: 1.5, md: 2 }} // ⬆️ aumentado o espaçamento vertical interno
                sx={{
                  flexGrow: 1,
                  pl: { xs: 0, md: isEven ? 2 : 0 },
                  pr: { xs: 0, md: isEven ? 0 : 2 },
                  alignItems: { xs: "center", md: isEven ? "flex-start" : "flex-end" },
                  textAlign: { xs: "center", md: "justify" },
                  justifyContent: "flex-start",
                  maxWidth: { xs: "90%", md: 420 },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "white",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    textAlign: { xs: "center", md: isEven ? "left" : "right" },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.6,
                    textAlign: "justify",
                  }}
                >
                  {project.description}
                </Typography>

                {/* 🔹 Ícone do GitHub como botão */}
                <IconButton
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)",
                    transition: "transform 0.25s ease, color 0.25s ease, filter 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.25)",
                      color: "#5170ff",
                      filter: "drop-shadow(0 0 6px rgba(81,112,255,0.5))",
                    },
                  }}
                >
                  <FaGithub size={26} />
                </IconButton>
              </Stack>
            </MotionBox>

            {/* 🔹 Divider */}
            <Box
              sx={{
                width: "88%",
                height: "1.5px",
                backgroundColor: "rgba(255,255,255,0.25)",
                mt: { xs: 2, md: 2.3 },
                mx: "auto",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};
