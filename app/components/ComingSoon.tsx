import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1
        style={{ ...styles.heading, marginBottom: "0rem" }}
        className="font-winter text-black"
      >
        Coming Soon
      </h1>
      <p style={styles.paragraph} className="text-black text-md font-normal">
        We are working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "auto",
    textAlign: "center" as const,
    paddingTop: "5rem", // Increased padding from the top
  },
  heading: {
    fontSize: "5rem",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.5rem",
    marginBottom: "5rem",
  },
};

export default ComingSoon;
