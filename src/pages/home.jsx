import React from "react";
import Navigation from "../components/navigation";
import image from "../assets/v1_22.png"; // Import the image correctly

function Home() {
  const hero = {
    home: {
      width: "100%",
    },
    hero: {
      display: "flex",
      flexDirection: "row", // Align content in a row
      width: "100%",
      alignItems: "center", // Ensure both containers are vertically aligned
      height: "auto", // Ensure the container takes up full viewport height
    },
    imageContainer: {
      marginBottom: "20px", // Add some space below the image
      width: "50%",
    },
    image: {
      maxWidth: "100%", // Ensure the image is responsive
      height: "80vh",
      borderRadius: "0px 0px 500px 500px", // Add border radius to the image
    },
    description: {
      display: "flex",
      width: "40%",
      flexDirection: "column", // Align content in a column
      justifyContent: "space-around",
    },
    heading: {
      marginTop: "0",
      fontSize: "50px", // Corrected font size property
      color: "#FFA9A9",
      marginBottom: "0",
    },
    title: {
      marginTop: "0",

      marginBottom: "0",
      color: "#595959",
      fontSize: "80px",
    },
    summary: {
      fontSize: "20px",
      color: "#2D2D2D",
      marginBottom: "0",
      marginTop: "0",
    },
    button: {
      width: "50%",
      fontSize: "25px",
      backgroundColor: "#FFA9A9",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };
  const badges = {
    badge1: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      padding: "20px 0",
      fontSize: "20px",
    },
    badge2: {
      display: "flex",
      flexDirection: "row",
      fontSize: "20px",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    p: {
      margin: "0",
      fontSize: "70px",
      color: "#FFA9A9",
      fontWeight: 700, // Make sure fontWeight is set correctly as a number
    },
    p1: {
      width: "50%",
      margin: "0",
      fontSize: "20px",
      color: "#707070",
      fontWeight: 700, // Make sure fontWeight is set correctly as a number
    },
  };
  const project ={
    project:{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      // alignItems: "center",
      // justifyContent: "center",
    },
    column1: {
      display: "flex",
      flexDirection: "column",
      width:'50%'
    }
  }

  return (
    <div>
      <Navigation />
      <section id="home" style={hero.home}>
        <div className="hero" style={hero.hero}>
          <div className="home-container" style={hero.imageContainer}>
            <img src={image} alt="Your Description" style={hero.image} />
          </div>
          <div className="description" style={hero.description}>
            <h1 style={hero.heading}>Pooja Rijal</h1>
            <h2 style={hero.title}>Data Scientist</h2>
            <p style={hero.summary}>
              I am a data scientist with a passion for data analysis and
              visualization. I have experience working with Python, SQL, and
              Tableau. I am always looking for new opportunities to learn and
              grow in the field of data science.
            </p>
            <button style={hero.button}>Download CV</button>
          </div>
        </div>
        <div className="badges" style={badges.badge1}>
          <div style={badges.badge2}>
            <p style={badges.p}>1</p>
            <p style={badges.p1}>Years of Experience</p>
          </div>
          <div style={badges.badge2}>
            <p style={badges.p}>6</p>
            <p style={badges.p1}>Completed projects</p>
          </div>
          <div style={badges.badge2}>
            <p style={badges.p}>3</p>
            <p style={badges.p1}>Live Projects</p>
          </div>
          <div style={badges.badge2}>
            <p style={badges.p}>1</p>
            <p style={badges.p1}>Years of Experience</p>
          </div>
        </div>
        <div className="projects" style={project.project}>
          <div className="column1" style={project.column1}>
            <h2>Projects</h2>
            <p>
              Here are a few projects that I have worked on. Feel free to check
              them out!
            </p>
            <img src={image} alt="Your Description" style={hero.image} />
          </div>
          <div className="column2" style={project.column1}>
          <img src={image} alt="Your Description" style={hero.image} />
          <img src={image} alt="Your Description" style={hero.image} />
            <button>See all</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
