import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <h1>Difference between authorization and authentication</h1>
      <div>
        <h2>Authentication</h2>
        <p>
          1. Authentication verifies who the user is.<br></br>
          2. Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
          <br></br>
          3. Authentication is the first step of a good identity and access
          management process.<br></br>
          4. Authentication is visible to and partially changeable by the user.{" "}
          <br />
        </p>
      </div>
      <div>
        <h2>Authorization</h2>
        <p>
          1. Authorization determines what resources a user can access.<br></br>
          2. Authorization works through settings that are implemented and
          maintained by the organization.<br></br>
          3. Authorization always takes place after authentication.<br></br>
          4. Authorization isn’t visible to or changeable by the user.
        </p>
      </div>
      <br />
      <h1>
        What other services does firebase provide other than authentication?
      </h1>
      <div>
        <p>
          Firebase is originally developed by Firebase inc and later acquired by
          Google. It provides different kinds of services that help you to
          develop high-quality mobile and web applications to grow your
          business. It is compatible with Web, iOS, Android, and OS X clients.
          With Firebase, developers don’t need to worry about the backend
          programming, Authentication, API development, database (real-time
          cloud-hosted NoSQL database and cloud firestore), File storage, etc.
          Firebase provides all the services with very efficient and fast
          performance. Firebase is a full package that can help in developing
          your mobile or web applications faster with fewer resources and more
          efficiency. Now, let’s look at some of the services and use of it. <br />
          There are many services which Firebase provides, Most useful of them
          are:
         1. Cloud Firestore <br />
         2. Cloud Functions <br />
         3. Authentication<br />
         4. Hosting<br />
         5. Cloud Storage<br />
         6. Google Analytics<br />
         7. Predictions<br />
         8. Cloud Messaging<br />
         9. Dynamic Links<br />
         10. Remote Config<br />
        <br />

        </p>
      </div>
      <div>
          <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>

            <p>
            Firebase Analytics gives you undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target. The unique features it offers also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach.
            </p>
            <p>
            Authentication is used by a server when the server needs to know exactly who is accessing their information or site. <br />
            Authentication is used by a client when the client needs to know that the server is system it claims to be. <br />
            In authentication, the user or computer has to prove its identity to the server or client. <br />
            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. <br />
            Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to. <br />
            Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.
            </p>
      </div>
    </div>
  );
};

export default Blogs;
