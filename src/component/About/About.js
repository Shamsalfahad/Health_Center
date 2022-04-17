import React from "react";
import useAbout from "./../../hooks/useAbout";
import Single from "./Single/Single";

const About = () => {
  const { about } = useAbout();
  return (
    <div className="container">
      <section className="team-section text-center" style={{ marginTop: "7%" }}>
        <h2 className="h1-responsive font-weight-bold my-5">About Us</h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          I basically Focused What Is My Client Want And What Will Be Good For Them  I Design A Program On Their Requirement. And Am Professionally Good At .. They Are Given Below -
        </p>
        <div className="row p-4 g-4">
          {about.map((abt) => (
            <Single key={abt.id} doctor={abt}></Single>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
