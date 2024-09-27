import { Typography, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Trophy icon
import { keyframes } from "@emotion/react";
import styles from "./SuccessStoriesHeader.module.css";
import CountUp from "react-countup";
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
          sx={{ fontSize: 50, color: "#f39c12", marginRight: "10px" }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          Success Stories
        </Typography>
        <EmojiEventsIcon
          sx={{ fontSize: 50, color: "#f39c12", marginRight: "8rem" }}
        />
      </Box>

      <div>
        <div className={`${styles.flexCenter} ${styles.stats}`}>
          <div className={`${styles.flexColStart} ${styles.stat}`}>
            <span>
              <CountUp start={8850} end={8876} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
          </div>
          <div className={`${styles.flexColStart} ${styles.stat}`}>
            <span>
              <CountUp start={5360} end={5468} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customers</span>
          </div>
          <div className={`${styles.flexColStart} ${styles.stat}`}>
            <span>
              <CountUp end={7} />
              <span>+</span>
            </span>
            <span className="secondaryText">Award Winning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesHeader;
