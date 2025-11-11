import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "./projectsData";

const MotionBox = motion(Box);

export const Projects = () => {
  return (
    <Box
      id="projetos"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        px: { xs: "5vw", md: 0 },
        py: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 10, md: 14 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        color="primary"
        sx={{
          textAlign: "center",
          mb: 2,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Projetos
      </Typography>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <MotionBox
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: isEven ? "row" : "row-reverse",
              },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* 🔹 Imagem menor, encostada, com sombra suave no PNG */}
            <Box
              sx={{
                width: { xs: "85%", md: "36%" },
                display: "flex",
                justifyContent: isEven ? "flex-start" : "flex-end",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  maxWidth: 340,
                  borderRadius: "14px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 22px rgba(81,112,255,0.3))",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    filter: "drop-shadow(0 10px 26px rgba(81,112,255,0.45))",
                  },
                }}
              />
            </Box>

            {/* 🔹 Texto ao lado da imagem */}
            <Stack
              spacing={2}
              sx={{
                width: { xs: "100%", md: "44%" },
                textAlign: { xs: "center", md: isEven ? "left" : "right" },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "white",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.6,
                  mb: 1,
                  maxWidth: 420,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {project.description}
              </Typography>

              <Button
                variant="contained"
                href={project.github}
                target="_blank"
                sx={{
                  alignSelf: { xs: "center", md: isEven ? "flex-start" : "flex-end" },
                  borderRadius: "28px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#5170ff",
                  boxShadow: "0 4px 18px rgba(81,112,255,0.25)",
                  "&:hover": {
                    backgroundColor: "#6783ff",
                    boxShadow: "0 6px 28px rgba(81,112,255,0.35)",
                  },
                }}
              >
                <FaGithub size={18} />
                Ver no GitHub
              </Button>
            </Stack>
          </MotionBox>
        );
      })}
    </Box>
  );
};
