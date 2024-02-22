import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/Home.module.css";
// @ts-ignore  
import vid from "../assets/soon.mp4";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline id="myVideo">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};


export default Home;
