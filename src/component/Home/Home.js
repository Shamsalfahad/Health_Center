import React from "react";
import useClient from "../../hooks/useClient";
import useProducts from "../../hooks/useService";
import SingleService from "../Service/SingleService/SingleService";
import Client from "./ClientSay/Client";

const Home = () => {
  const [services] = useProducts();
  const [clientSay] = useClient();
  return (
    <>
      <section>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://wallsdesk.com/wp-content/uploads/2016/10/Gym-HD-Desktop.jpg')",
            height: "400px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Welcome To Health Center</h1>
                <h4 className="mb-3">Find Your Best Health Services</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#service"
                  role="button"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* main part */}
      <main>
        <div className="container my-5 py-5">
          <section id="service">
            <h2 className="border-bottom text-center py-2">Latest Services</h2>
            <div className="row g-4 my-2">
              {services.slice(0, 6).map((service) => (
                <SingleService
                  key={service.id}
                  service={service}
                ></SingleService>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section id="clientsay" className="container text-center my-5 p-2">
        <h2 className="h1-responsive font-weight-bold my-5">Client say</h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
         The Best Review From Our Client 
        </p>
        <div className="row">
          {clientSay.slice(0, 3).map((client) => (
            <Client key={client.id} client={client}></Client>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
