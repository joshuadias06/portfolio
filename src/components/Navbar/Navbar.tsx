import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useScrollTrigger,
} from "@mui/material";
import { ThemeToggle } from "../ThemeToggle";
import { motion } from "framer-motion";

// ✅ Tipagem ajustada — aceita qualquer prop
interface ElevationScrollProps {
  children: React.ReactElement<any>;
}

// Efeito de leve sombra e blur ao rolar
const ElevationScroll: React.FC<ElevationScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger
        ? "rgba(10, 10, 10, 0.15)" // leve fundo quando scrolla
        : "transparent", // 100% transparente no topo
      backdropFilter: trigger ? "blur(18px)" : "blur(0px)",
      WebkitBackdropFilter: trigger ? "blur(18px)" : "blur(0px)",
      transition: "all 0.4s ease",
    },
  });
};

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Carreira", href: "#carreira" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Projetos", href: "#projetos" },
  ];

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          backgroundColor: "transparent !important",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
          "&.MuiPaper-elevation4": {
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
            backgroundColor: "rgba(0,0,0,0.15)",
          },
          "&.MuiAppBar-colorTransparent": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 8 },
            py: 1.5,
          }}
        >
          {/* Nome / Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(90deg, #5170ff 0%, #8094ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
                cursor: "default",
                userSelect: "none",
              }}
            >
              Joshua Dias
            </Typography>
          </motion.div>

          {/* Links de navegação */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              flexGrow: 1,
            }}
          >
            {navLinks.map(({ label, href }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Button
                  href={href}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    color: "text.primary",
                    fontSize: "1rem",
                    textTransform: "none",
                    letterSpacing: "0.3px",
                    transition:
                      "color 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
                    borderBottom: "2px solid transparent",
                    borderRadius: 0,
                    "&:hover": {
                      color: "#5170ff",
                      transform: "translateY(-2px)",
                      borderBottom: "2px solid #5170ff",
                    },
                  }}
                >
                  {label}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Botão de tema */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              minWidth: 64,
            }}
          >
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
