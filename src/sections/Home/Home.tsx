import { Box, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import perfilIcon from "../../assets/perfil_icon.png";

export const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <Box
      id="inicio"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
        px: { xs: "6vw", md: "8vw" },
      }}
    >
      {/* IMAGEM COM ANIMAÇÃO */}
      <motion.div
        variants={fadeInImage}
        initial="hidden"
        animate="visible"
        style={{
          flexBasis: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: "50%", md: "8vw" },
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 340, md: 480 },
            height: { xs: 340, md: 480 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(81,112,255,0.38) 0%, rgba(81,112,255,0.03) 65%)",
            filter: "blur(40px)",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.95,
          }}
        />
        <Box
          component="img"
          src={perfilIcon}
          alt="Foto de perfil"
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: 300, md: 520 },
            height: { xs: 300, md: 520 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 90px rgba(81,112,255,0.28)",
            ml: { xs: 0, md: "4vw" },
            maxWidth: "calc(60vw)",
          }}
        />
      </motion.div>

      {/* TEXTO + BOTÃO */}
      <Stack
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        spacing={4}
        sx={{
          flexBasis: { xs: "100%", md: "48%" },
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "right" },
          justifyContent: "center",
          pr: { xs: 0, md: "5vw" },
          pl: { xs: 0, md: 4 },
          py: { xs: 6, md: 0 },
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* TÍTULO */}
        <motion.div variants={fadeInUp}>
          <Typography
            variant="h2"
            fontWeight={800}
            color="primary"
            sx={{
              lineHeight: 1.1,
              fontSize: { xs: "2.3rem", md: "3.5rem" },
              maxWidth: { xs: "90%", md: "52ch" },
              letterSpacing: "-0.02em",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0px 0px 20px rgba(81,112,255,0.1)",
            }}
          >
            Construindo soluções digitais que inspiram e geram impacto real.
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1.15rem", md: "1.4rem" },
              maxWidth: { xs: "100%", md: "50ch" },
              fontWeight: 500,
              lineHeight: 1.7,
              fontFamily: "'Poppins', sans-serif",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Unindo engenharia, produto e propósito para criar experiências digitais
            que resolvem problemas reais e impulsionam negócios.
          </Typography>
        </motion.div>

        {/* BOTÃO */}
        <motion.div variants={fadeInUp}>
          <Button
            variant="contained"
            color="primary"
            href="#contato"
            sx={{
              position: "relative",
              zIndex: 3,
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "1rem", md: "1.25rem" },
              px: { xs: 4, md: 6 },
              py: { xs: 1.4, md: 2.2 },
              borderRadius: "56px",
              fontWeight: 700,
              textTransform: "none",
              color: "#ffffff",
              backgroundColor: "#5170ff",
              boxShadow: "0 4px 16px rgba(81,112,255,0.25)",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
              "&:hover": {
                backgroundColor: "#5170ff",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 22px rgba(81,112,255,0.35)",
                filter: "brightness(1.05)",
                color: "#ffffff",
              },
            }}
          >
            Entre em Contato
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
};
