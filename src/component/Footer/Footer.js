import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor:"#000000" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <Link
                  to="/signup"
                  className="btn btn-success btn-rounded"
                >
                  Sign up!
                </Link>
              </p>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright: 
            <a className="text-white" href="https://www.youtube.com/user/F12345678966">
               <span className="ms-2">Health Center</span>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
