import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import styles from "./SocialLinks.module.css";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

interface SocialLinksProps {
  direction?: "row" | "column";
  size?: "small" | "medium" | "large";
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  direction = "row",
  size = "medium",
}) => {
  // Lista de links sociais
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/username",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <GitHub />,
      url: "https://github.com/username",
      color: "#333",
    },
    {
      name: "Email",
      icon: <Email />,
      url: "mailto:patrycksans@gmail.com",
      color: "#D44638",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      url: "https://twitter.com/username",
      color: "#1DA1F2",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://instagram.com/username",
      color: "#E4405F",
    },
  ];

  return (
    <Box
      className={styles.container}
      sx={{
        flexDirection: direction,
        gap: direction === "row" ? 2 : 1,
      }}
    >
      {socialLinks.map((link) => (
        <Tooltip key={link.name} title={link.name} arrow>
          <IconButton
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            size={size}
            className={`${styles.iconButton} ${styles.socialIcon}`}
            sx={{
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: link.color,
                color: "#fff",
              },
              transition: "all 0.2s ease",
            }}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialLinks;
