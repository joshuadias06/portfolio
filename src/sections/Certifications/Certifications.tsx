import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "./certificationsData";
import type { Certification } from "./certificationsData";

import {
  SiKotlin,
  SiPython,
  SiCypress,
  SiReact,
  SiGooglecloud,
  SiGithub,
} from "react-icons/si";
import { FaHandshake, FaJava } from "react-icons/fa";

import type { JSX } from "@emotion/react/jsx-runtime";

const MotionCard = motion(Card);
const MotionDiv = motion.div;

const categories = [
  "java",
  "kotlin",
  "python",
  "qa",
  "web",
  "cloud",
  "github",
  "softskills",
];

const categoryIcons: Record<string, JSX.Element> = {
  java: <FaJava color="white" size={20} />,
  kotlin: <SiKotlin color="white" size={20} />,
  python: <SiPython color="white" size={20} />,
  qa: <SiCypress color="white" size={20} />,
  web: <SiReact color="white" size={20} />,
  cloud: <SiGooglecloud color="white" size={20} />,
  github: <SiGithub color="white" size={20} />,
  softskills: <FaHandshake color="white" size={20} />,
};

export const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("java");

  const filteredCerts = certificationsData.filter(
    (cert) => cert.category === selectedCategory
  );

  return (
    <Box
      id="certificacoes"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        px: { xs: "6vw", md: "8vw" },
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        color="primary"
        sx={{
          textAlign: "center",
          mb: 6,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Certificações
      </Typography>

      {/* 🔹 Botões de categoria */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 6,
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
              px: 3,
              py: 1.2,
              borderRadius: "24px",
              transition: "all 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              color: "white",
              borderColor: "rgba(255,255,255,0.3)",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.6)",
              },
              ...(selectedCategory === category && {
                boxShadow: "0 0 18px rgba(81,112,255,0.45)",
              }),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "inherit",
              }}
            >
              {categoryIcons[category]}
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  color: "inherit",
                  fontSize: 15,
                }}
              >
                {category}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>

      {/* 🔹 Lista de Certificados */}
      <AnimatePresence mode="wait">
        <MotionDiv
          key={selectedCategory}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
            useFlexGap
            sx={{
              rowGap: 6,
              columnGap: 4,
            }}
          >
            {filteredCerts.map((cert: Certification, index) => (
              <MotionDiv
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                style={{
                  flex: "1 1 280px",
                  maxWidth: 320,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MotionCard
                  whileHover={{ scale: 1.03 }} // ✅ mantém apenas o efeito de leve zoom
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    position: "relative",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(20px) saturate(160%)",
                    WebkitBackdropFilter: "blur(20px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 12px 45px rgba(81,112,255,0.18)",
                    color: "text.primary",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent sx={{ p: 3, zIndex: 2, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        mb: 1,
                        color: "text.primary",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 1,
                        color: "text.secondary",
                        fontFamily: "'Inter', sans-serif",
                        opacity: 0.9,
                      }}
                    >
                      {cert.institution}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        fontFamily: "'Inter', sans-serif",
                        opacity: 0.8,
                      }}
                    >
                      {cert.description}
                    </Typography>

                    <Box
                      component="img"
                      src={cert.image}
                      alt={cert.title}
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        objectFit: "cover",
                        mt: "auto",
                        boxShadow: "0 6px 24px rgba(81,112,255,0.15)",
                      }}
                    />
                  </CardContent>
                </MotionCard>
              </MotionDiv>
            ))}
          </Stack>
        </MotionDiv>
      </AnimatePresence>
    </Box>
  );
};
