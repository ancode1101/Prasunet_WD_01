import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            PrasuNet
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li class="dropdown">
              <a href="#service">Services</a>
              <div class="dropdown-content">
                <div class="dropdown-submenu">
                    <a href="#service">Lorem ipsum dolor</a>
                    <a href="#service">Consectetur adipiscing</a>
                    <a href="#service">Lorem ipsum dolor</a>
                </div>
                {/* <div class="dropdown-submenu">
                    <a href="#">Insight</a>
                    <div class="dropdown-content">
                        <a href="#">Data Analytics and AI</a>
                        <a href="#">Applied AI</a>
                        <a href="#">Generative AI</a>
                        <a href="#">Prasunet Topaz</a>
                        <a href="#">Sustainability Services</a>
                    </div>
                </div>
                <div class="dropdown-submenu">
                    <a href="#">Innovate</a>
                    <div class="dropdown-content">
                        <a href="#">Blockchain</a>
                        <a href="#">Engineering Services</a>
                        <a href="#">Internet of Things (IoT)</a>
                    </div>
                </div>
                <div class="dropdown-submenu">
                    <a href="#">Accelerate</a>
                    <div class="dropdown-content">
                        <a href="#">Enterprise Agile DevOps</a>
                        <a href="#">API Economy & Microservices</a>
                        <a href="#">Application Modernization</a>
                        <a href="#">Digital Process Automation</a>
                        <a href="#">Digital Supply Chain</a>
                        <a href="#">Microsoft Cloud Business</a>
                        <a href="#">Salesforce</a>
                    </div>
                </div>
                <div class="dropdown-submenu">
                    <a href="#">Assure</a>
                    <div class="dropdown-content">
                        <a href="#">Cyber Security</a>
                        <a href="#">Quality Engineering</a>
                    </div>
                </div>
                <a href="#">Consulting Services</a> */}
              </div>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
