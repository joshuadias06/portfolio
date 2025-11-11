import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import avatarJoshua from "../../assets/avatar_joshua.png";

const Motion = motion as any;

export const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" as const } },
  };

  return (
    <Box
      id="inicio"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        px: { xs: "5vw", md: "8vw" },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* 🔹 Texto PORTFOLIO */}
      <Box
        sx={{
          position: "absolute",
          top: "26%",
          left: 0,
          width: "100%",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
          overflow: "visible",
          pointerEvents: "none",
          px: "2vw",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(100px, 17vw, 250px)",
            fontWeight: 900,
            lineHeight: 0.9,
            color: "#ffffff",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "nowrap",
            maxWidth: "96vw",
            transform: "translateX(-2%) scaleY(1.5)",
            transformOrigin: "center",
            textShadow: "0 0 40px rgba(255,255,255,0.12), 0 0 80px rgba(81,112,255,0.18)",
            filter: "drop-shadow(0 0 50px rgba(81,112,255,0.25))",
            userSelect: "none",
          }}
        >
          PORTFOLIO
        </Typography>
      </Box>

      {/* 🔹 Avatar centralizado (agora maior) */}
      <Motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInImage}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "0vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Luz difusa atrás */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 340, md: 560 }, // ⬆️ aumentada
            height: { xs: 340, md: 560 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(81,112,255,0.4) 0%, rgba(81,112,255,0.03) 60%)",
            filter: "blur(55px)", // mais suave
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Avatar com máscara circular */}
        <Motion.img
          src={avatarJoshua}
          alt="Avatar de Joshua Dias"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            width: "min(75vw, 800px)",
            height: "min(75vw, 800px)",
            maxWidth: 800,
            maxHeight: 800,
            objectFit: "cover",
            borderRadius: "50%",
            WebkitMaskImage: "radial-gradient(circle, white 99%, transparent 100%)",
            maskImage: "radial-gradient(circle, white 99%, transparent 100%)",
            boxShadow: "0 25px 70px rgba(81,112,255,0.3)",
            zIndex: 2,
            backgroundColor: "transparent",
          }}
        />
      </Motion.div>

      {/* 🔹 Textos auxiliares */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 110, md: 130 },
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          px: { xs: "5vw", md: "8vw" },
          zIndex: 3,
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ maxWidth: 400 }}>
          <Motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.5,
                fontFamily: "'Poppins', sans-serif",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Engenheiro de Software e Estagiário de QA na Acqio
              — explorando o ecossistema de pagamentos digitais e 
              impulsionando a qualidade de produtos reais.
            </Typography>
          </Motion.div>
        </Box>

        <Box sx={{ maxWidth: 400 }}>
          <Motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.5,
                fontFamily: "'Poppins', sans-serif",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              Desenvolvendo soluções digitais que unem engenharia,
              produto e experiência — transformando ideias em sistemas
              robustos, escaláveis e cheios de propósito.
            </Typography>
          </Motion.div>
        </Box>
      </Box>
    </Box>
  );
};
