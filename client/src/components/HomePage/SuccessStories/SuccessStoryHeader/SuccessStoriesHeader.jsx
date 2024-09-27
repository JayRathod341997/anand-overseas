import { Typography, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Trophy icon
import { keyframes } from "@emotion/react";
import styles from "./SuccessStoriesHeader.module.css";

// Define keyframes for animation (slide in and fade in)
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SuccessStoriesHeader = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${slideIn} 3.5s ease-in-out`, // Adding the slide in animation
          marginBottom: "20px",
        }}
      >
        <EmojiEventsIcon
          className={styles.iconBounce}
          sx={{ fontSize: 50, color: "#f39c12" }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          Success <br /> Stories
        </Typography>
        <EmojiEventsIcon sx={{ fontSize: 50, color: "#f39c12" }} />
      </Box>
    </div>
  );
};

export default SuccessStoriesHeader;
