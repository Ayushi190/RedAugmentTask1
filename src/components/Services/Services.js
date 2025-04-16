import React from "react";
import "./Services.css";

const serviceFilters = [
  "Artificial Intelligence & Advanced Data Solutions",
  "Custom Software Development, Cloud & DevOps Engineering",
  "Product Innovation, Design & Digital Experiences",
  "Branding, Marketing & Content Strategy",
  "Strategic Consulting & Digital Transformation",
];

const featuredServices = [
  {
    title: "AI Strategy & Advisory",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.jpg?s=612x612&w=0&k=20&c=1cW5xuLcb6HPDj6CLQQFBvGK5_fJvx9eA2egik-3hAc=",
  },
  {
    title: "Computer Vision & Image Analysis",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://media.istockphoto.com/id/2055023629/photo/4k-beautiful-color-gradient-background-with-noise-abstract-pastel-holographic-blurred-grainy.jpg?s=612x612&w=0&k=20&c=l65_0xqN76oYzun9lKf_abnquQ7i8HF3pGkCnVbPKsE=",
  },
  {
    title: "Machine Learning & Deep Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Web Scraping and Big Data Extraction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "AI for Industry - specific Applications",
    description: "Lorem ipsum dolor sit amet...",
    image:
      "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=",
  },
  {
    title: "Third Party AI & API Integrations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    image:
      "https://media.istockphoto.com/id/1173279965/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=WkMJQe9YWZ7K575cA9OdqB4q6XrqlrRMafE2UbF9MT4=",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Header and navigation section */}
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">R</div>
          <h2>Red Augment</h2>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services" className="active">
            Services
          </a>
          <a href="#work">Work</a>
          <div className="dropdown">
            <a href="#company">Company ▾</a>
            <div className="dropdown-content">
              <a href="#about">About</a>
              <a href="#blogs">Blogs</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          <a href="#pricing">Pricing</a>
        </div>
      </div>

      {/* Main content */}
      <div className="services-content">
        <h1>Explore our services</h1>

        {/* Search section */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search ...."
            className="search-input"
          />
          <button className="search-button">
            <span className="arrow-right">→</span>
          </button>
        </div>

        {/* Filter tags */}
        <div className="filter-tags">
          {serviceFilters.map((filter, index) => (
            <div className="filter-tag" key={index}>
              {filter}
            </div>
          ))}
        </div>

        {/* Featured services */}
        <div className="featured-services">
          {featuredServices.map((service, index) => (
            <div
              className={`featured-service-card ${
                index === 0 ? "dark-gradient" : "purple-gradient"
              }`}
              key={index}
            >
              {service.image && (
                <img
                  className="card-bg-image"
                  src={service.image}
                  alt={service.title}
                />
              )}
              <div className="card-content-overlay">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
