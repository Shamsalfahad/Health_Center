import React from "react";
import useAbout from "./../../hooks/useAbout";
import Single from "./Single/Single";

const About = () => {
  const { about } = useAbout();
  return (
    <div className="container">
      <section className="team-section text-center" style={{ marginTop: "7%" }}>
        <h1 className="h1-responsive font-weight-bold my-5">About Me</h1>
        <h2>Name:<span>Shams Al Fahad</span></h2>
        <p className="grey-text w-responsive mx-auto mb-5">
        I am Shams Al Fahad. My Future Goal Is, I Wants To Be A Frontend Developer And In Shaa Allah I Will Fulfill My Goals Soon 🙂
        </p>
        <div className="row p-4 g-4 ">
          {about.map((abt) => (
            <Single key={abt.id} doc={abt}></Single>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
