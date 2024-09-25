import styles from "./ScoreCard.module.css"; // Importing the CSS module

const ScoreCard = () => {
  return (
    <div className={styles.scoreCard}>
      <div className={styles.header}>
        <img
          className={styles.profileImage}
          src="profile_image_url" // Replace with the actual image URL
          alt="Kinjal Patel"
        />
        <div className={styles.headerText}>
          <h3>Kinjal Patel</h3>
          <p>duolingo english test</p>
        </div>
      </div>

      <div className={styles.scoreSection}>
        <h4>First attempt</h4>
        <div className={styles.scoreGrid}>
          <div className={styles.scoreItem}>
            <p>Literacy</p>
            <h2>115</h2>
          </div>
          <div className={styles.scoreItem}>
            <p>Comprehension</p>
            <h2>115</h2>
          </div>
          <div className={styles.scoreItem}>
            <p>Conversation</p>
            <h2>110</h2>
          </div>
          <div className={styles.scoreItem}>
            <p>Production</p>
            <h2>100</h2>
          </div>
        </div>
        <div className={styles.overallScore}>
          <h1>115</h1>
          <p>OVERALL SCORE</p>
        </div>
      </div>

      <div className={styles.footer}>
        <img src="language_lab_logo_url" alt="Language Lab" />
        <img src="anand_overseas_logo_url" alt="Anand Overseas" />
      </div>
    </div>
  );
};

export default ScoreCard;
