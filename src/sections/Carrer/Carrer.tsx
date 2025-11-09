import { Box, Typography, Card, CardContent, IconButton, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { carrerCards } from "./CarrerData";
import { carrerSummary } from "./CarrerSummary";

export const Carrer = () => {
  const [current, setCurrent] = useState(0);
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? carrerCards.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === carrerCards.length - 1 ? 0 : prev + 1));

  return (
    <Box
      id="carreira"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.default",
        px: { xs: "6vw", md: "8vw" },
        py: { xs: 8, md: 12 },
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 8, md: 6 },
      }}
    >
      {/* ESQUERDA — Resumo Profissional */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          pr: { xs: 0, md: 4 },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          color="primary"
          sx={{
            mb: 3,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.2,
          }}
        >
          Carreira
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: "1.05rem", md: "1.2rem" },
            lineHeight: 1.7,
            textAlign: { xs: "center", md: "justify" },
            whiteSpace: "pre-line",
            maxWidth: 640,
          }}
        >
          {carrerSummary}
        </Typography>
      </Box>

      {/* DIREITA — Carrossel */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              width: "100%",
              maxWidth: 520,
            }}
          >
            <Card
              component={motion.div}
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              sx={{
                background: isDark
                  ? "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)",
                backdropFilter: "blur(25px) saturate(180%)",
                WebkitBackdropFilter: "blur(25px) saturate(180%)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(0,0,0,0.1)",
                borderRadius: "24px",
                boxShadow: isDark
                  ? "0 16px 60px rgba(81,112,255,0.25)"
                  : "0 16px 60px rgba(81,112,255,0.15)",
                color: "text.primary",
                overflow: "hidden",
                p: 3,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 520,
              }}
            >
              <CardContent sx={{ p: 0, zIndex: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: isDark ? "#fff" : "#111",
                    mb: 0.8,
                    letterSpacing: "0.3px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {carrerCards[current].title}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1.5,
                    color: isDark
                      ? "rgba(255,255,255,0.65)"
                      : "rgba(0,0,0,0.55)",
                    fontWeight: 500,
                    letterSpacing: "0.4px",
                  }}
                >
                  {carrerCards[current].period}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: isDark
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(0,0,0,0.75)",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {carrerCards[current].description}
                </Typography>
              </CardContent>

              <Box
                component={motion.img}
                src={carrerCards[current].image}
                alt={carrerCards[current].title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                sx={{
                  width: "100%",
                  height: 280,
                  mt: 3,
                  borderRadius: "16px",
                  objectFit: "contain",
                  zIndex: 1,
                }}
              />
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navegação */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -40,
            color: "#5170ff",
            "&:hover": { transform: "scale(1.2)" },
            transition: "transform 0.2s ease",
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -40,
            color: "#5170ff",
            "&:hover": { transform: "scale(1.2)" },
            transition: "transform 0.2s ease",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};
