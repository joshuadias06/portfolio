import { useState, useEffect } from "react";
import { Box, Typography, Chip, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "./projectsData";

export const Projects = () => {
  const [active, setActive] = useState(0);

  // alterna automaticamente os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="projetos"
      sx={{
        width: "100vw",
        height: "88vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#000",
      }}
    >
      {/* 🔹 Título */}
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          position: "absolute",
          top: "6vh",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.04em",
        }}
      >
        Projetos
      </Typography>

      {/* 🔹 Container principal */}
      <Box
        sx={{
          width: "90%",
          height: "65%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          {projects.map(
            (project, index) =>
              index === active && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection:
                      window.innerWidth < 900
                        ? "column"
                        : index % 2 === 0
                        ? "row"
                        : "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    gap: window.innerWidth < 900 ? "18px" : "28px", // 🔹 mais próximo
                  }}
                >
                  {/* 🔹 Imagem com sombra circular */}
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "0 0 48%",
                    }}
                  >
                    {/* luz circular suave */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "75%",
                        height: "75%",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(81,112,255,0.35) 0%, rgba(81,112,255,0) 70%)",
                        filter: "blur(45px)",
                        zIndex: 1,
                      }}
                    />

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "82%",
                        maxWidth: "430px",
                        borderRadius: "14px",
                        objectFit: "cover",
                        zIndex: 2,
                        filter:
                          "drop-shadow(0 0 22px rgba(81,112,255,0.3)) drop-shadow(0 0 35px rgba(81,112,255,0.2))",
                      }}
                    />
                  </Box>

                  {/* 🔹 Texto */}
                  <Box
                    sx={{
                      flex: "0 0 48%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems:
                        index % 2 === 0 ? "flex-start" : "flex-end",
                      textAlign: index % 2 === 0 ? "left" : "right",
                      color: "#fff",
                      maxWidth: "440px",
                      gap: 1.4, // 🔹 reduzido para aproximar conteúdo
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#fff",
                        mb: 0.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* 🔹 Chips */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        justifyContent:
                          index % 2 === 0 ? "flex-start" : "flex-end",
                      }}
                    >
                      {project.technologies?.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.15)",
                            fontSize: "0.8rem",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        />
                      ))}
                    </Box>

                    {/* 🔹 GitHub */}
                    <IconButton
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.4)",
                        borderRadius: "50%",
                        p: 1.1,
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "#5170ff",
                          transform: "scale(1.08)",
                        },
                      }}
                    >
                      <FaGithub size={22} />
                    </IconButton>
                  </Box>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </Box>

      {/* 🔹 Indicadores */}
      <Box
        sx={{
          position: "absolute",
          bottom: "6vh",
          display: "flex",
          gap: 1,
        }}
      >
        {projects.map((_, i) => (
          <Box
            key={i}
            onClick={() => setActive(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                i === active
                  ? "rgba(81,112,255,0.9)"
                  : "rgba(255,255,255,0.3)",
              transform: i === active ? "scale(1.3)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
