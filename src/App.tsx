import React from "react";
import "./styles.css";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        border: "5px solid #333", // Add border
        borderRadius: "10px", // Optional: Rounded corners
        maxWidth: "800px", // Optional: Limit the width
        margin: "auto", // Centers the content
      }}
    >
      <header>
        <h1>Welcome to My Website</h1>
      </header>

      <section id="about" style={{ marginBottom: "30px" }}>
        <h2>About Me</h2>
        <p>
          A passionate developer with experience in web development. I
          specialize in creating user-friendly and efficient websites using the
          latest technologies. I enjoy solving complex problems and continuously
          improving my skills.
        </p>
      </section>

      <section id="skills" style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </section>

      <section id="contact" style={{ marginBottom: "30px" }}>
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities!
        </p>
        <ul>
          <li>Email: example@email.com</li>
          <li>Facebook: Errol Montoya</li>
        </ul>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#333",
          color: "#fff",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
