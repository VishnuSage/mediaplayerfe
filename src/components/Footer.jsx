import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="footer d-flex align-items-center justify-content-evenly">
        <div className="textStyle" style={{ width: "400px" }}>
          <h5>
            <i className="fa-solid fa-video text-warning fa-xl me-3"></i> Media
            Player
          </h5>
          <p className="textStyle" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ad odio doloremque nisi dolorem quae eos autem. Blanditiis cum ex
            maiores magnam incidunt itaque neque nisi, officia, quod optio
            eveniet.
          </p>
        </div>
        <div className="d-flex flex-column ms-3">
          <h4 className="textStyle">Links</h4>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Home page
          </Link>
          <Link to="/watch" style={{ textDecoration: "none", color: "white" }}>
            Watch History
          </Link>
        </div>
        <div className="d-flex flex-column ms-5">
          <h4 className="textStyle">Guides</h4>
          <Link
            to="https://react.dev/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to="https://react-bootstrap.github.io/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to="https://www.npmjs.com/package/json-server"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            JSON Server
          </Link>
        </div>
        <div className="ms-5">
          <h4 className="textStyle">Contact US</h4>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email Id"
              />
              <button className="btn btn-warning ms-2">SUBSCRIBE</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-3">
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i className="fa-brands fa-instagram fa-2x"></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i className="fa-brands fa-twitter fa-2x"></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i className="fa-brands fa-facebook fa-2x"></i>
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }}>
                <i className="fa-brands fa-reddit fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
